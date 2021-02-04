# Story: I want to edit my Email Signature

## Acceptance criteria:
- Create a form that collects and saves user data
- Extend preview to display data with a right layout

### Form
Autosave form. Form contains:
- Name
- surname 
- role
- email

Data should be collected by form and displayed **live** in signature preview.

`api.js/saveUser({name: string, surname: string; role: string; email: string})` method can be use to save the form. 
Save status needs to be displayed in the SnackBar component.
`useSnackbarContext` hook should be used for this.

`saveUser` API has a rate limit of 1 request per 5 seconds.

## Preview component

![Signature preview](public/signature-preview.png "Signature preview")

The component should display data live from the form.
Additionally, it should show meta info which it can receive from API:
- `api.ts/getOwners()` method can retrieve information about company owners. 
- `api.ts/getAddress()` method can retrieve information about company address.

Depending on the current date, the old or new address needs to be displayed. If the current date is after 01.08.2020, then the new address needs to be displayed; otherwise - the old one.
## Additionally:

1. Build generic form component. Example of usage:

```
<Form initialValues={{ field1: "", field2: "" }} onChange={onChange}>
  <FormInput name="field1" />
  <FormInput name="field2" />
</Form>
```
Use this generic component for Signature Form.

2. Extend `SnackBar` the way it can be hidden after timeout (if defined).
3. Improve page performance.



