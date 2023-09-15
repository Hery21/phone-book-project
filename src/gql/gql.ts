/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetContactList (\n    $distinct_on: [contact_select_column!], \n    $limit: Int, \n    $offset: Int, \n    $order_by: [contact_order_by!]\n) {\n  contact(\n      distinct_on: $distinct_on, \n      limit: $limit, \n      offset: $offset, \n      order_by: $order_by\n  ){\n    created_at\n    first_name\n    id\n    last_name\n    phones {\n      number\n    }\n  }\n}\n": types.GetContactListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetContactList (\n    $distinct_on: [contact_select_column!], \n    $limit: Int, \n    $offset: Int, \n    $order_by: [contact_order_by!]\n) {\n  contact(\n      distinct_on: $distinct_on, \n      limit: $limit, \n      offset: $offset, \n      order_by: $order_by\n  ){\n    created_at\n    first_name\n    id\n    last_name\n    phones {\n      number\n    }\n  }\n}\n"): (typeof documents)["\n  query GetContactList (\n    $distinct_on: [contact_select_column!], \n    $limit: Int, \n    $offset: Int, \n    $order_by: [contact_order_by!]\n) {\n  contact(\n      distinct_on: $distinct_on, \n      limit: $limit, \n      offset: $offset, \n      order_by: $order_by\n  ){\n    created_at\n    first_name\n    id\n    last_name\n    phones {\n      number\n    }\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;