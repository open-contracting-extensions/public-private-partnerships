# Contract signatories

## Background

In core OCDS the signatories to the contract are not explicitly declared in the `contract` section. Instead the contract signatories are implicitly assumed to be the `buyer` defined at release level (known as the `publicAuthority` in the PPP extension) and the `suppliers` listed in the `award` associated with the contract (known as the `preferredBidders` in the PPP extension).

In some types of contracting process there may be additional signatories to the contract or the signatories to the contract may differ from those specified in `buyer` / `publicAuthority` and `award/suppliers` / `award/preferredBidders`.

## Extension fields

This extension adds a `signatories` property to the `contract` section. The `signatories` property is an array of `OrganizationReference`'s.

## Example

The following JSON snippet models a PPP contracting process where there is an additional signatory to the contract beyond those defined in the `publicAuthority` and `award/preferredBidders` fields.

```json
{
  "publicAuthority": {
    "name": "Ministry of Communications",
    "id": "GB-GOV-12345678"
  },
  "awards": [
    {
      "preferredBidders": [
        {
          "name": "Example Consortium",
          "id": "GB-COH-00000000"
        },
      ]
    },
  ],
  "contract": {
    "signatories": [
      {
        "name": "Ministry of Communications",
        "id": "GB-GOV-12345678"
      },
      {
        "name": "Example Consortium",
        "id": "GB-COH-00000000"
      },
      {
        "name": "Telecommunications UK",
        "id": "GB-GOV-99999999"
      }
    ]
  }
}
```

## Usage notes

Each signatory to the contract should have an associated entry in the `parties` section of OCDS.

This extension follows the approach to modelling organizations introduced in OCDS V1.1.

## Issues

Report issues for this extension in the [ocds-extensions repository](https://github.com/open-contracting/ocds-extensions/issues), putting the extension's name in the issue's title.
