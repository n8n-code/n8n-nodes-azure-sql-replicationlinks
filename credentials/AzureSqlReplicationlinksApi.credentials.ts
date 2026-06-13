import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlReplicationlinksApi implements ICredentialType {
        name = 'N8nDevAzureSqlReplicationlinksApi';

        displayName = 'Azure SQL Replicationlinks API';

        icon: Icon = { light: 'file:../nodes/AzureSqlReplicationlinks/azure-sql-replicationlinks.png', dark: 'file:../nodes/AzureSqlReplicationlinks/azure-sql-replicationlinks.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Replicationlinks API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
