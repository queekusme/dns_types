import Parser from "./Parser.ts";

export enum QR
{
    Query = 0,
    Response = 1
}

export enum Opcode
{
    /**
     * A Standard DNS Query
     */
    Standard = 0,

    /**
     * An Inverse Query
     */
    Inverse = 1,

    /**
     * A Server Status Request
     */
    Status = 2

    /* 3-15 - reserved for future use */
}

export enum ReturnCode
{
    NoError = 0,

    /**
     * The name server was unable to interpret the query
     */
    FormatError = 1,

    /**
     * The name server was unable to process this query due to a problem with the name server
     */
    ServerFailure = 2,

    /**
     * Meaningful only for responses from an authoritative name server,
     * this code signifies that the domain name referenced in the query does not exist
     */
    NameError = 3,

    /**
     * The name server does not support the requested kind of query
     */
    NotImplemented = 4,

    /**
     * The name server refuses to perform the specified operation for policy reasons.
     * For example, a name server may not wish to provide the information to the
     * particular requester, or a name server may not wish to perform a particular
     * operation (e.g., zone transfer) for particular data
     */
    Refused = 5

    /* 6-15 - reserved for future use */
}

export type Bit = 0 | 1;

export enum Type
{
    /**
     * A Host Address (IPv4)
     */
    A = 1,

    /**
     * An Authoritative Name Server
     */
    NS = 2,

    /**
     * A Mail Destination
     *
     * @deprecated - use MX
     */
    MD = 3,

    /**
     * A Mail Forwarder
     *
     * @deprecated - use MX
     */
    MF = 4,

    /**
     * The canonical name for an Alias
     */
    CNAME = 5,

    /**
     * Marks the Start of a Zone of Authority
     */
    SOA = 6,

    /**
     * A Mailbox Domain Name
     *
     * EXPERIMENTAL
     */
    MB = 7,

    /**
     * A Mail Group MEmber
     */
    MG = 8,

    /**
     * A Mail rename Domain Name
     */
    MR = 9,

    /**
     * A Null RR
     *
     * EXPERIMENTAL
     */
    NULL = 10,

    /**
     * A Well Known Service Description
     */
    WKS = 11,

    /**
     * A Domain Pointer
     */
    PTR = 12,

    /**
     * Host Information
     */
    HINFO = 13,

    /**
     * Mailbox or Mail List information
     */
    MINFO = 14,

    /**
     * A Mail Exchange
     */
    MX = 15,

    /**
     * Text Strings
     */
    TX = 16,

    /**
     * A Host Address (IPv6)
     */
    AAAA = 28
}

export enum QTypeAdditionals
{
    /**
     * A request for a transfer of an entire zone
     */
    AXFR = 252,

    /**
     * A request for mailbox-related records (MB, MG or MR)
     */
    MAILB = 253,

    /**
     * A request for mail agent RRs
     *
     * @deprecated see MX
     */
    MAILA = 254,

    /**
     * A request for all records
     */
    ALL = 255
}

export enum Class
{
    /**
     * The Internet
     */
    IN = 1,

    /**
     * CSNET
     *
     * @deprecated
     */
    CS = 2,

    /**
     * CHAOS
     */
    CH = 3,

    /**
     * HESIOD
     */
    HS = 4
}

// Allow anything which can be parsed as an accepted type
// deno-lint-ignore no-explicit-any
export type DNSProtocolResourceRecordAcceptedTypes = Parser<any>;