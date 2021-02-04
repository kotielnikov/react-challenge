# Story: I want to edit my Email Signature

## Acceptance criteria:

- Create form which collects and saves user data
- Extend preview to display data with a right layout

### Form

Name, surname, role, email should be collected by form and displayed life in signature preview.

Data should be saved via `api.ts/saveUser()` call. Save status needs to be displayed in SnackBar component, `useSnackbarContext` can be used for this.

API has a rate limit of 1 request per 5 seconds.

API Url: POST `/save_user` 
Request type: {
  name: string;
  surname: string;
  email: string;
  role: string;
}

Response type: {
  status: 'success' | 'error';
  error?: string;
}

### Preview

Check the designs in attachments.

The preview displays dynamic data from Form.

Additionally, it shows meta info which it needs to receive from API.

API Url: GET `/addresses` 
Response type: {
  old: {
    address: string,
    postalCode: string,
    city: string,
  },
  new: {
    address: string,
    postalCode: string,
    city: string,
  }
}

API Url: GET `/owners`
Response type: string[]

Information about company owners can be retrieved from `api.ts/getOwners()`.
Information about company address can be retrieved from `api.ts/getAddress()`.

Depending on the current date the old or new address needs to be displayed.
If the current date is after 01.08.2020 then the new address needs to be displayed, otherwise - the old one.

## Additionally:

1. Build reusable Form Management Component. Target API:

```
<Form initialValue={{ name: "", surname: "" }} onChange={saveData}>
  <FormInput name="name" />
  <FormInput name="surname" />
</Form>
```

2. When needed SbackBar should be hidden after user-defined timeout (currently, it's displayed indefinitely)
3. Improve page performance.

## Attachments

![Signature preview](public/signature-preview.png "Signature preview")
