# What does this do?

Convert an Exchange internal IMCEAEX address to X500

# Why would I need this?

Sometimes one changes a Mailbox recipient into a MailUser recipient.
Even though they have the same internet (aka "SMTP") email addresses,
Outlook complains because it remembered the old
[Internet Mail Connector Encapsulated Addressing](https://technet.microsoft.com/en-us/library/bb430743(v=exchg.150).aspx#Top-level resolution),
also related to the [LegacyExchangeDN](https://support.microsoft.com/en-us/kb/2807779)
attribute in Active Directory.

Outlook can be none the wiser if you add the old internal address
as a secondary address to the MailUser:

1.  Collect the old IMCEAEX address from the delivery error message
2.  Convert the old IMCEAEX address to an X500 address
3.  Add the X500 address to the MailUser

```Javascript
var imceaex = "IMCEAEX-_O=MMS_OU=EXCHANGE+20ADMINISTRATIVE+20GROUP+20+28FYDIBOHF23SPDLT+29_CN=RECIPIENTS_CN=User6ed4e168-addd-4b03-95f5-b9c9a421957358d@mgd.domain.com";
var x500 = convertIMCEAEXToX500(imceaex);

// "X500:/O=MMS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=User6ed4e168-addd-4b03-95f5-b9c9a421957358d"
    X500:/O=MMS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=User-addd-4b03-95f5-b9c9a421957358d
```

# TODO

* Handle more `+##` characters than just space and parentheses
