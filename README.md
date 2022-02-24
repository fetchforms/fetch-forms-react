# Fetch Forms for React

### What is Fetch Forms?
Fetch Forms is a headless forms builder designed to help developers build forms and connect data.

## Documentation
- [Full code examples](https://github.com/fetchforms/react-example-app)
- [Doc Overview](https://www.fetchforms.io/docs/overview)
- [The Fetch Form object](https://www.fetchforms.io/docs/fetch-form-object)
- [Storing forms in source code](https://www.fetchforms.io/docs/build-a-form)

### Add the package to your app
```sh
npm install @fetchforms/react
```
```sh
yarn add @fetchforms/react
```

### Quick start
Using the `<FetchForm />` component is the fastest way to see Fetch Forms in action. This component will handle client-side validation, data parsing, and saving to the cloud if your form has `cloudSave` set. 

```jsx
import { FetchForm, FetchFormsProvider } from "@fetchforms/react";

const MyFetchForm = () => {
    const onSubmit = async (values) => {
        console.log('values', values);
    };

    return (
        <FetchFormsProvider permission="API_TOKEN">
            <FetchForm
                slug="FORM_SLUG"
                onSubmit={onSubmit}
            />
        </FetchFormsProvider>
    );
};
```

### Using hooks
The `useFetchForms` hook allows you to display your forms in more complex layouts. See the [custom form example](https://github.com/fetchforms/react-example-app/tree/main/src/examples) to see an implementation using Ant.Design form element.

```jsx
import { useFetchForms } from "@fetchforms/react";

const CustomFormLayout = () => {
    const [fetchForm, loading, error] = useFetchForms('FORM_SLUG');

    const onFinish = (values) => {
        console.log('values', values);
        // To show an error on the form, return a message as a string.
    };

    return (
        <>
            {error && <div>Error: {error}</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                fetchForm && (
                    <form
                        name='customForm'
                        onSubmit={onFinish}
                    >
                        {fetchForm.formItems.map((item, i) => {
                            if(item.fieldType === 'select') {
                                return (
                                    <div key={item.fieldHtml.id}>
                                        <label for={item.fieldHtml.name}>{item.label}</label>
                                        <select {...item.fieldHtml}>
                                            {item.options.map((opt) => (
                                                <option value={opt.value} key={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                );
                            } else if (item.fieldType === 'checkbox') {
                                return (
                                    <div key={item.fieldHtml.id}>
                                        <input {...item.fieldHtml} />
                                        <label for={item.fieldHtml.name}>{item.label}</label>
                                    </div>
                                );
                            {/* ...other field types */}
                            } else {
                                return (
                                    <div key={item.fieldHtml.id}>
                                        <input {...item.fieldHtml} />
                                        <label for={item.fieldHtml.name}>{item.label}</label>
                                    </div>
                                );
                            }
                        })}
                        <button type='submit'>
                            {fetchForm.submitText}
                        </button>
                    </form>
                )
            )}
      </>
    )
}

const App = () => {
    return (
        <FetchFormsProvider permission="API_TOKEN">
            <CustomFormLayout />
        </FetchFormsProvider>
    );
}
```
