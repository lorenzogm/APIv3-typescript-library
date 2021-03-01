/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetSmsCampaignStats } from './getSmsCampaignStats';

export class GetSmsCampaign {
    /**
    * ID of the SMS Campaign
    */
    'id': number;
    /**
    * Name of the SMS Campaign
    */
    'name': string;
    /**
    * Status of the SMS Campaign
    */
    'status': GetSmsCampaign.StatusEnum;
    /**
    * Content of the SMS Campaign
    */
    'content': string;
    /**
    * UTC date-time on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
    */
    'scheduledAt'?: Date;
    /**
    * Sender of the SMS Campaign
    */
    'sender': string;
    /**
    * Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'createdAt': Date;
    /**
    * UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'modifiedAt': Date;
    'recipients': GetCampaignRecipients;
    'statistics': GetSmsCampaignStats;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GetSmsCampaign.StatusEnum"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "Date"
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "GetCampaignRecipients"
        },
        {
            "name": "statistics",
            "baseName": "statistics",
            "type": "GetSmsCampaignStats"
        }    ];

    static getAttributeTypeMap() {
        return GetSmsCampaign.attributeTypeMap;
    }
}

export namespace GetSmsCampaign {
    export enum StatusEnum {
        Draft = <any> 'draft',
        Sent = <any> 'sent',
        Archive = <any> 'archive',
        Queued = <any> 'queued',
        Suspended = <any> 'suspended',
        InProcess = <any> 'inProcess'
    }
}
