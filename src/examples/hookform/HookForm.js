import React from 'react';
import { useFetchForms } from '../../lib';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  Radio,
  InputNumber,
  Alert
} from 'antd';
import './styles.css';

const HookForm = () => {
  // FetchFormProvider needs to wrap this component
  const [fetchForm, loading, error] = useFetchForms(
    'fcd4ca8b-12d4-4b8c-882d-00144d54d02c'
  );

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // custom form validation
  const createValidationRules = (fieldType, validations) => {
    const rules = validations.map((validation) => {
      if (validation.rule === 'required') {
        return { required: true, message: validation.message };
      } else if (validation.rule === 'regex') {
        return {
          pattern: new RegExp(validation.limit),
          message: validation.message
        };
      } else {
        return {
          [validation.rule]: validation.limit,
          message: validation.message,
          type: fieldType === 'number' ? 'number' : 'string'
        };
      }
    });
    console.log('rules', rules);
    return rules;
  };

  const findFieldType = (item) => {
    switch (item.fieldType) {
      case 'select':
        const { Option } = Select;
        return (
          <Select key={item.name}>
            <Option value=''></Option>
            {item.options.map((option) => (
              <Option value={option.value} key={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        );
      case 'checkbox':
        return <Checkbox key={item.name} />;
      case 'textarea':
        const { TextArea } = Input;
        return <TextArea key={item.name} />;
      case 'number':
        return <InputNumber key={item.name} />;
      default:
        return <Input {...item.fieldHtml} key={item.name} />;
    }
  };

  return (
    <div className=''>
      <div className='text-3xl'>Hook Form</div>
      <p className='text-gray-500'>
        Fetch a form with the useFetchForm hook and then construct your form
        with custom components and layouts
      </p>
      <br />
      {error && <Alert message={error} type='error' showIcon />}

      {loading ? (
        <div>Loading...</div>
      ) : (
        fetchForm && (
          <Form
            name='HookForm'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            noValidate
          >
            {fetchForm.formItems.map((item, i) => (
              <Form.Item
                key={i}
                label={item.label}
                name={item.name}
                valuePropName={
                  item.fieldType === 'checkbox' ? 'checked' : 'value'
                }
                rules={createValidationRules(item.fieldType, item.validation)}
                validateTrigger='onBlur'
              >
                {item.fieldType === 'radio' ? (
                  <Radio.Group>
                    {item.options.map((opt) => (
                      <Radio value={opt.value} key={opt.value}>
                        {opt.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                ) : (
                  findFieldType(item)
                )}
              </Form.Item>
            ))}
            <Form.Item
              wrapperCol={{
                span: 8,
                offset: 6
              }}
            >
              <Button type='primary' htmlType='submit'>
                {fetchForm.submitText}
              </Button>
            </Form.Item>
          </Form>
        )
      )}
    </div>
  );
};

export default HookForm;
