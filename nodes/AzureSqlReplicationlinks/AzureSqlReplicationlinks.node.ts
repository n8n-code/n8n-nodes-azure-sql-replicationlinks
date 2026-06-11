import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlReplicationlinks implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Replicationlinks',
		name: 'N8nDevAzureSqlReplicationlinks',
		icon: { light: 'file:./azure-sql-replicationlinks.png', dark: 'file:./azure-sql-replicationlinks.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Manages Azure SQL Database replication link read, delete, and failover operations.',
		defaults: { name: 'Azure SQL Replicationlinks' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlReplicationlinksApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
