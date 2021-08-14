# DNS Types

This is a Port of my NPM package [DNS_Host](https://www.npmjs.com/package/@queekusme/dns_host).
As such recieving UInt8Array data from `Deno.listenDatagram` will most likely need converting to use the [Buffer compatibility class](https://deno.land/std/node/buffer.ts) within Deno's std libs

Dns Types is a set of types to assist with the creation of DNS Requests and Responses.

Each Type has the ability to decode from and encode to a buffer which can be recieved from a raw request.

# Example
```
const protocol = new DNSProtocol();
protocol.decode(/* Raw (Node Compatibility) Buffer containing the DNS Request/Response */);

const questionsCount = protocol.header.qdCount.value;
const answersCount = protocol.anCount.qdCount.value;
const authoritiesCount = protocol.nsCount.qdCount.value;
const additionalsCount = protocol.arCount.qdCount.value;
```

DNSProtocol is the main entrypoint type and when decode is called will recurse through data to decode the header and any provided questions etc... in one go.
Encoding is the same, if a DNSProtocol class is created and modified, and subsequently encoded, the Protocol class with encode all sub sections (Header, Questions, Answers, etc...) leaving the user to provide the data required

# Resource Record Helpers
The following Resource Record Helper classes have been provided to assist with creation of records
- IPv4 and IPv6
- DomainName

And can be used as such:

```

const queekus_com_name: DomainName = new DomainName("queekus.com.");

DNSProtocolResourceRecord.of(queekus_com_name.asSubdomain("www"), Type.CNAME, Class.IN, 60 * 5, queekus_com_name);  // www.queekus.com.	60	IN	CNAME	queekus.com.
DNSProtocolResourceRecord.of(queekus_com_name, Type.A, Class.IN, 60 * 5, new IPv4("185.199.110.153"));              // queekus.com.	    60	IN	A	    185.199.110.153
```

# NOTES:
- This is a port of DNS_Host's types only and doesn't include any of the logic to create or manage a DNS Server
- This module was designed for me to learn how the DNS protocol works, there may be gaps/inconsistencies, especially, for example, with regards to DNSSec requirements.

## Known Gaps
- DnsSec Requirements
- Decoding a Response doesn't decode 'Answers', 'Authorities' and 'Additionals' sections but can encode all of those if provided