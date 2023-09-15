/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  json: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory = {
  __typename?: '_fuzzysearch_directory';
  company: Scalars['String']['output'];
  department: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate = {
  __typename?: '_fuzzysearch_directory_aggregate';
  aggregate?: Maybe<_Fuzzysearch_Directory_Aggregate_Fields>;
  nodes: Array<_Fuzzysearch_Directory>;
};

/** aggregate fields of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate_Fields = {
  __typename?: '_fuzzysearch_directory_aggregate_fields';
  avg?: Maybe<_Fuzzysearch_Directory_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<_Fuzzysearch_Directory_Max_Fields>;
  min?: Maybe<_Fuzzysearch_Directory_Min_Fields>;
  stddev?: Maybe<_Fuzzysearch_Directory_Stddev_Fields>;
  stddev_pop?: Maybe<_Fuzzysearch_Directory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Fuzzysearch_Directory_Stddev_Samp_Fields>;
  sum?: Maybe<_Fuzzysearch_Directory_Sum_Fields>;
  var_pop?: Maybe<_Fuzzysearch_Directory_Var_Pop_Fields>;
  var_samp?: Maybe<_Fuzzysearch_Directory_Var_Samp_Fields>;
  variance?: Maybe<_Fuzzysearch_Directory_Variance_Fields>;
};


/** aggregate fields of "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type _Fuzzysearch_Directory_Avg_Fields = {
  __typename?: '_fuzzysearch_directory_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "_fuzzysearch.directory". All fields are combined with a logical 'AND'. */
export type _Fuzzysearch_Directory_Bool_Exp = {
  _and?: InputMaybe<Array<_Fuzzysearch_Directory_Bool_Exp>>;
  _not?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
  _or?: InputMaybe<Array<_Fuzzysearch_Directory_Bool_Exp>>;
  company?: InputMaybe<String_Comparison_Exp>;
  department?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Constraint {
  /** unique or primary key constraint */
  DirectoryPkey = 'directory_pkey'
}

/** input type for incrementing numeric columns in table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Insert_Input = {
  company?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type _Fuzzysearch_Directory_Max_Fields = {
  __typename?: '_fuzzysearch_directory_max_fields';
  company?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type _Fuzzysearch_Directory_Min_Fields = {
  __typename?: '_fuzzysearch_directory_min_fields';
  company?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Mutation_Response = {
  __typename?: '_fuzzysearch_directory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Fuzzysearch_Directory>;
};

/** on_conflict condition type for table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_On_Conflict = {
  constraint: _Fuzzysearch_Directory_Constraint;
  update_columns?: Array<_Fuzzysearch_Directory_Update_Column>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};

/** Ordering options when selecting data from "_fuzzysearch.directory". */
export type _Fuzzysearch_Directory_Order_By = {
  company?: InputMaybe<Order_By>;
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _fuzzysearch_directory */
export type _Fuzzysearch_Directory_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Select_Column {
  /** column name */
  Company = 'company',
  /** column name */
  Department = 'department',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "_fuzzysearch.directory" */
export type _Fuzzysearch_Directory_Set_Input = {
  company?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type _Fuzzysearch_Directory_Stddev_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type _Fuzzysearch_Directory_Stddev_Pop_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type _Fuzzysearch_Directory_Stddev_Samp_Fields = {
  __typename?: '_fuzzysearch_directory_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type _Fuzzysearch_Directory_Sum_Fields = {
  __typename?: '_fuzzysearch_directory_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "_fuzzysearch.directory" */
export enum _Fuzzysearch_Directory_Update_Column {
  /** column name */
  Company = 'company',
  /** column name */
  Department = 'department',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type _Fuzzysearch_Directory_Var_Pop_Fields = {
  __typename?: '_fuzzysearch_directory_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type _Fuzzysearch_Directory_Var_Samp_Fields = {
  __typename?: '_fuzzysearch_directory_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type _Fuzzysearch_Directory_Variance_Fields = {
  __typename?: '_fuzzysearch_directory_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type _Fuzzysearch_Search_Args = {
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Table Contact  */
export type Contact = {
  __typename?: 'contact';
  created_at: Scalars['timestamptz']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  last_name: Scalars['String']['output'];
  /** An array relationship */
  phones: Array<Phone>;
  /** An aggregate relationship */
  phones_aggregate: Phone_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** Table Contact  */
export type ContactPhonesArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


/** Table Contact  */
export type ContactPhones_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};

/** aggregated selection of "contact" */
export type Contact_Aggregate = {
  __typename?: 'contact_aggregate';
  aggregate?: Maybe<Contact_Aggregate_Fields>;
  nodes: Array<Contact>;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_Fields = {
  __typename?: 'contact_aggregate_fields';
  avg?: Maybe<Contact_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contact_Max_Fields>;
  min?: Maybe<Contact_Min_Fields>;
  stddev?: Maybe<Contact_Stddev_Fields>;
  stddev_pop?: Maybe<Contact_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contact_Stddev_Samp_Fields>;
  sum?: Maybe<Contact_Sum_Fields>;
  var_pop?: Maybe<Contact_Var_Pop_Fields>;
  var_samp?: Maybe<Contact_Var_Samp_Fields>;
  variance?: Maybe<Contact_Variance_Fields>;
};


/** aggregate fields of "contact" */
export type Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contact_Avg_Fields = {
  __typename?: 'contact_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Bool_Exp>>;
  _not?: InputMaybe<Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  phones?: InputMaybe<Phone_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact" */
export enum Contact_Constraint {
  /** unique or primary key constraint */
  ContactPkey = 'contact_pkey'
}

/** input type for incrementing numeric columns in table "contact" */
export type Contact_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "contact" */
export type Contact_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Phone_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Contact_Max_Fields = {
  __typename?: 'contact_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Contact_Min_Fields = {
  __typename?: 'contact_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "contact" */
export type Contact_Mutation_Response = {
  __typename?: 'contact_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Contact>;
};

/** input type for inserting object relation for remote table "contact" */
export type Contact_Obj_Rel_Insert_Input = {
  data: Contact_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** on_conflict condition type for table "contact" */
export type Contact_On_Conflict = {
  constraint: Contact_Constraint;
  update_columns?: Array<Contact_Update_Column>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "contact". */
export type Contact_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phones_aggregate?: InputMaybe<Phone_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact */
export type Contact_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "contact" */
export enum Contact_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "contact" */
export type Contact_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Contact_Stddev_Fields = {
  __typename?: 'contact_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contact_Stddev_Pop_Fields = {
  __typename?: 'contact_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contact_Stddev_Samp_Fields = {
  __typename?: 'contact_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Contact_Sum_Fields = {
  __typename?: 'contact_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "contact" */
export enum Contact_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Contact_Var_Pop_Fields = {
  __typename?: 'contact_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contact_Var_Samp_Fields = {
  __typename?: 'contact_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contact_Variance_Fields = {
  __typename?: 'contact_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "elements" */
export type Elements = {
  __typename?: 'elements';
  element?: Maybe<Scalars['json']['output']>;
  page_id: Scalars['bigint']['output'];
};


/** columns and relationships of "elements" */
export type ElementsElementArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "elements" */
export type Elements_Aggregate = {
  __typename?: 'elements_aggregate';
  aggregate?: Maybe<Elements_Aggregate_Fields>;
  nodes: Array<Elements>;
};

/** aggregate fields of "elements" */
export type Elements_Aggregate_Fields = {
  __typename?: 'elements_aggregate_fields';
  avg?: Maybe<Elements_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Elements_Max_Fields>;
  min?: Maybe<Elements_Min_Fields>;
  stddev?: Maybe<Elements_Stddev_Fields>;
  stddev_pop?: Maybe<Elements_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Elements_Stddev_Samp_Fields>;
  sum?: Maybe<Elements_Sum_Fields>;
  var_pop?: Maybe<Elements_Var_Pop_Fields>;
  var_samp?: Maybe<Elements_Var_Samp_Fields>;
  variance?: Maybe<Elements_Variance_Fields>;
};


/** aggregate fields of "elements" */
export type Elements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Elements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Elements_Avg_Fields = {
  __typename?: 'elements_avg_fields';
  page_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "elements". All fields are combined with a logical 'AND'. */
export type Elements_Bool_Exp = {
  _and?: InputMaybe<Array<Elements_Bool_Exp>>;
  _not?: InputMaybe<Elements_Bool_Exp>;
  _or?: InputMaybe<Array<Elements_Bool_Exp>>;
  element?: InputMaybe<Json_Comparison_Exp>;
  page_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "elements" */
export type Elements_Inc_Input = {
  page_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "elements" */
export type Elements_Insert_Input = {
  element?: InputMaybe<Scalars['json']['input']>;
  page_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Elements_Max_Fields = {
  __typename?: 'elements_max_fields';
  page_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Elements_Min_Fields = {
  __typename?: 'elements_min_fields';
  page_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "elements" */
export type Elements_Mutation_Response = {
  __typename?: 'elements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Elements>;
};

/** Ordering options when selecting data from "elements". */
export type Elements_Order_By = {
  element?: InputMaybe<Order_By>;
  page_id?: InputMaybe<Order_By>;
};

/** select columns of table "elements" */
export enum Elements_Select_Column {
  /** column name */
  Element = 'element',
  /** column name */
  PageId = 'page_id'
}

/** input type for updating data in table "elements" */
export type Elements_Set_Input = {
  element?: InputMaybe<Scalars['json']['input']>;
  page_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Elements_Stddev_Fields = {
  __typename?: 'elements_stddev_fields';
  page_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Elements_Stddev_Pop_Fields = {
  __typename?: 'elements_stddev_pop_fields';
  page_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Elements_Stddev_Samp_Fields = {
  __typename?: 'elements_stddev_samp_fields';
  page_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Elements_Sum_Fields = {
  __typename?: 'elements_sum_fields';
  page_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Elements_Var_Pop_Fields = {
  __typename?: 'elements_var_pop_fields';
  page_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Elements_Var_Samp_Fields = {
  __typename?: 'elements_var_samp_fields';
  page_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Elements_Variance_Fields = {
  __typename?: 'elements_variance_fields';
  page_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "_fuzzysearch.directory" */
  delete__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** delete single row from the table: "_fuzzysearch.directory" */
  delete__fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<Contact_Mutation_Response>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "elements" */
  delete_elements?: Maybe<Elements_Mutation_Response>;
  /** delete data from the table: "pages" */
  delete_pages?: Maybe<Pages_Mutation_Response>;
  /** delete data from the table: "phone" */
  delete_phone?: Maybe<Phone_Mutation_Response>;
  /** delete single row from the table: "phone" */
  delete_phone_by_pk?: Maybe<Phone>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "_fuzzysearch.directory" */
  insert__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** insert a single row into the table: "_fuzzysearch.directory" */
  insert__fuzzysearch_directory_one?: Maybe<_Fuzzysearch_Directory>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<Contact_Mutation_Response>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "elements" */
  insert_elements?: Maybe<Elements_Mutation_Response>;
  /** insert a single row into the table: "elements" */
  insert_elements_one?: Maybe<Elements>;
  /** insert data into the table: "pages" */
  insert_pages?: Maybe<Pages_Mutation_Response>;
  /** insert a single row into the table: "pages" */
  insert_pages_one?: Maybe<Pages>;
  /** insert data into the table: "phone" */
  insert_phone?: Maybe<Phone_Mutation_Response>;
  /** insert a single row into the table: "phone" */
  insert_phone_one?: Maybe<Phone>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "_fuzzysearch.directory" */
  update__fuzzysearch_directory?: Maybe<_Fuzzysearch_Directory_Mutation_Response>;
  /** update single row of the table: "_fuzzysearch.directory" */
  update__fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<Contact_Mutation_Response>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update data of the table: "elements" */
  update_elements?: Maybe<Elements_Mutation_Response>;
  /** update data of the table: "pages" */
  update_pages?: Maybe<Pages_Mutation_Response>;
  /** update data of the table: "phone" */
  update_phone?: Maybe<Phone_Mutation_Response>;
  /** update single row of the table: "phone" */
  update_phone_by_pk?: Maybe<Phone>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete__Fuzzysearch_DirectoryArgs = {
  where: _Fuzzysearch_Directory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ContactArgs = {
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ElementsArgs = {
  where: Elements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PagesArgs = {
  where: Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PhoneArgs = {
  where: Phone_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Phone_By_PkArgs = {
  contact_id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert__Fuzzysearch_DirectoryArgs = {
  objects: Array<_Fuzzysearch_Directory_Insert_Input>;
  on_conflict?: InputMaybe<_Fuzzysearch_Directory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Fuzzysearch_Directory_OneArgs = {
  object: _Fuzzysearch_Directory_Insert_Input;
  on_conflict?: InputMaybe<_Fuzzysearch_Directory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactArgs = {
  objects: Array<Contact_Insert_Input>;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_OneArgs = {
  object: Contact_Insert_Input;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ElementsArgs = {
  objects: Array<Elements_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Elements_OneArgs = {
  object: Elements_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_PagesArgs = {
  objects: Array<Pages_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Pages_OneArgs = {
  object: Pages_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_PhoneArgs = {
  objects: Array<Phone_Insert_Input>;
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Phone_OneArgs = {
  object: Phone_Insert_Input;
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Fuzzysearch_DirectoryArgs = {
  _inc?: InputMaybe<_Fuzzysearch_Directory_Inc_Input>;
  _set?: InputMaybe<_Fuzzysearch_Directory_Set_Input>;
  where: _Fuzzysearch_Directory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Fuzzysearch_Directory_By_PkArgs = {
  _inc?: InputMaybe<_Fuzzysearch_Directory_Inc_Input>;
  _set?: InputMaybe<_Fuzzysearch_Directory_Set_Input>;
  pk_columns: _Fuzzysearch_Directory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ContactArgs = {
  _inc?: InputMaybe<Contact_Inc_Input>;
  _set?: InputMaybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_By_PkArgs = {
  _inc?: InputMaybe<Contact_Inc_Input>;
  _set?: InputMaybe<Contact_Set_Input>;
  pk_columns: Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ElementsArgs = {
  _inc?: InputMaybe<Elements_Inc_Input>;
  _set?: InputMaybe<Elements_Set_Input>;
  where: Elements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PagesArgs = {
  _inc?: InputMaybe<Pages_Inc_Input>;
  _set?: InputMaybe<Pages_Set_Input>;
  where: Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PhoneArgs = {
  _inc?: InputMaybe<Phone_Inc_Input>;
  _set?: InputMaybe<Phone_Set_Input>;
  where: Phone_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Phone_By_PkArgs = {
  _inc?: InputMaybe<Phone_Inc_Input>;
  _set?: InputMaybe<Phone_Set_Input>;
  pk_columns: Phone_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _inc?: InputMaybe<Projects_Inc_Input>;
  _set?: InputMaybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pages" */
export type Pages = {
  __typename?: 'pages';
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  project_id: Scalars['bigint']['output'];
  slug: Scalars['String']['output'];
};

/** aggregated selection of "pages" */
export type Pages_Aggregate = {
  __typename?: 'pages_aggregate';
  aggregate?: Maybe<Pages_Aggregate_Fields>;
  nodes: Array<Pages>;
};

/** aggregate fields of "pages" */
export type Pages_Aggregate_Fields = {
  __typename?: 'pages_aggregate_fields';
  avg?: Maybe<Pages_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pages_Max_Fields>;
  min?: Maybe<Pages_Min_Fields>;
  stddev?: Maybe<Pages_Stddev_Fields>;
  stddev_pop?: Maybe<Pages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pages_Stddev_Samp_Fields>;
  sum?: Maybe<Pages_Sum_Fields>;
  var_pop?: Maybe<Pages_Var_Pop_Fields>;
  var_samp?: Maybe<Pages_Var_Samp_Fields>;
  variance?: Maybe<Pages_Variance_Fields>;
};


/** aggregate fields of "pages" */
export type Pages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pages_Avg_Fields = {
  __typename?: 'pages_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pages". All fields are combined with a logical 'AND'. */
export type Pages_Bool_Exp = {
  _and?: InputMaybe<Array<Pages_Bool_Exp>>;
  _not?: InputMaybe<Pages_Bool_Exp>;
  _or?: InputMaybe<Array<Pages_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_id?: InputMaybe<Bigint_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "pages" */
export type Pages_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  project_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "pages" */
export type Pages_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['bigint']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Pages_Max_Fields = {
  __typename?: 'pages_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['bigint']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Pages_Min_Fields = {
  __typename?: 'pages_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['bigint']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "pages" */
export type Pages_Mutation_Response = {
  __typename?: 'pages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pages>;
};

/** Ordering options when selecting data from "pages". */
export type Pages_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** select columns of table "pages" */
export enum Pages_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "pages" */
export type Pages_Set_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['bigint']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Pages_Stddev_Fields = {
  __typename?: 'pages_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pages_Stddev_Pop_Fields = {
  __typename?: 'pages_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pages_Stddev_Samp_Fields = {
  __typename?: 'pages_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Pages_Sum_Fields = {
  __typename?: 'pages_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  project_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Pages_Var_Pop_Fields = {
  __typename?: 'pages_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pages_Var_Samp_Fields = {
  __typename?: 'pages_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pages_Variance_Fields = {
  __typename?: 'pages_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** Table Phone Numbers  */
export type Phone = {
  __typename?: 'phone';
  /** An object relationship */
  contact?: Maybe<Contact>;
  contact_id: Scalars['Int']['output'];
  created_ad?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  number: Scalars['String']['output'];
};

/** aggregated selection of "phone" */
export type Phone_Aggregate = {
  __typename?: 'phone_aggregate';
  aggregate?: Maybe<Phone_Aggregate_Fields>;
  nodes: Array<Phone>;
};

/** aggregate fields of "phone" */
export type Phone_Aggregate_Fields = {
  __typename?: 'phone_aggregate_fields';
  avg?: Maybe<Phone_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Phone_Max_Fields>;
  min?: Maybe<Phone_Min_Fields>;
  stddev?: Maybe<Phone_Stddev_Fields>;
  stddev_pop?: Maybe<Phone_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Phone_Stddev_Samp_Fields>;
  sum?: Maybe<Phone_Sum_Fields>;
  var_pop?: Maybe<Phone_Var_Pop_Fields>;
  var_samp?: Maybe<Phone_Var_Samp_Fields>;
  variance?: Maybe<Phone_Variance_Fields>;
};


/** aggregate fields of "phone" */
export type Phone_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Phone_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "phone" */
export type Phone_Aggregate_Order_By = {
  avg?: InputMaybe<Phone_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Phone_Max_Order_By>;
  min?: InputMaybe<Phone_Min_Order_By>;
  stddev?: InputMaybe<Phone_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Phone_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Phone_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Phone_Sum_Order_By>;
  var_pop?: InputMaybe<Phone_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Phone_Var_Samp_Order_By>;
  variance?: InputMaybe<Phone_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "phone" */
export type Phone_Arr_Rel_Insert_Input = {
  data: Array<Phone_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Phone_On_Conflict>;
};

/** aggregate avg on columns */
export type Phone_Avg_Fields = {
  __typename?: 'phone_avg_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "phone" */
export type Phone_Avg_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "phone". All fields are combined with a logical 'AND'. */
export type Phone_Bool_Exp = {
  _and?: InputMaybe<Array<Phone_Bool_Exp>>;
  _not?: InputMaybe<Phone_Bool_Exp>;
  _or?: InputMaybe<Array<Phone_Bool_Exp>>;
  contact?: InputMaybe<Contact_Bool_Exp>;
  contact_id?: InputMaybe<Int_Comparison_Exp>;
  created_ad?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "phone" */
export enum Phone_Constraint {
  /** unique or primary key constraint */
  PhoneIdKey = 'phone_id_key',
  /** unique or primary key constraint */
  PhoneNumberKey = 'phone_number_key',
  /** unique or primary key constraint */
  PhonePkey = 'phone_pkey'
}

/** input type for incrementing numeric columns in table "phone" */
export type Phone_Inc_Input = {
  contact_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "phone" */
export type Phone_Insert_Input = {
  contact?: InputMaybe<Contact_Obj_Rel_Insert_Input>;
  contact_id?: InputMaybe<Scalars['Int']['input']>;
  created_ad?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Phone_Max_Fields = {
  __typename?: 'phone_max_fields';
  contact_id?: Maybe<Scalars['Int']['output']>;
  created_ad?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "phone" */
export type Phone_Max_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Phone_Min_Fields = {
  __typename?: 'phone_min_fields';
  contact_id?: Maybe<Scalars['Int']['output']>;
  created_ad?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "phone" */
export type Phone_Min_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "phone" */
export type Phone_Mutation_Response = {
  __typename?: 'phone_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Phone>;
};

/** on_conflict condition type for table "phone" */
export type Phone_On_Conflict = {
  constraint: Phone_Constraint;
  update_columns?: Array<Phone_Update_Column>;
  where?: InputMaybe<Phone_Bool_Exp>;
};

/** Ordering options when selecting data from "phone". */
export type Phone_Order_By = {
  contact?: InputMaybe<Contact_Order_By>;
  contact_id?: InputMaybe<Order_By>;
  created_ad?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: phone */
export type Phone_Pk_Columns_Input = {
  contact_id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
};

/** select columns of table "phone" */
export enum Phone_Select_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAd = 'created_ad',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number'
}

/** input type for updating data in table "phone" */
export type Phone_Set_Input = {
  contact_id?: InputMaybe<Scalars['Int']['input']>;
  created_ad?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Phone_Stddev_Fields = {
  __typename?: 'phone_stddev_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "phone" */
export type Phone_Stddev_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Phone_Stddev_Pop_Fields = {
  __typename?: 'phone_stddev_pop_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "phone" */
export type Phone_Stddev_Pop_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Phone_Stddev_Samp_Fields = {
  __typename?: 'phone_stddev_samp_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "phone" */
export type Phone_Stddev_Samp_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Phone_Sum_Fields = {
  __typename?: 'phone_sum_fields';
  contact_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "phone" */
export type Phone_Sum_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "phone" */
export enum Phone_Update_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAd = 'created_ad',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number'
}

/** aggregate var_pop on columns */
export type Phone_Var_Pop_Fields = {
  __typename?: 'phone_var_pop_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "phone" */
export type Phone_Var_Pop_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Phone_Var_Samp_Fields = {
  __typename?: 'phone_var_samp_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "phone" */
export type Phone_Var_Samp_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Phone_Variance_Fields = {
  __typename?: 'phone_variance_fields';
  contact_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "phone" */
export type Phone_Variance_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  contributor_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  avg?: Maybe<Projects_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
  stddev?: Maybe<Projects_Stddev_Fields>;
  stddev_pop?: Maybe<Projects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Projects_Stddev_Samp_Fields>;
  sum?: Maybe<Projects_Sum_Fields>;
  var_pop?: Maybe<Projects_Var_Pop_Fields>;
  var_samp?: Maybe<Projects_Var_Samp_Fields>;
  variance?: Maybe<Projects_Variance_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Projects_Avg_Fields = {
  __typename?: 'projects_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Bool_Exp>>;
  _not?: InputMaybe<Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Bool_Exp>>;
  contributor_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "projects" */
export type Projects_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  contributor_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  contributor_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  contributor_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  contributor_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  ContributorId = 'contributor_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  contributor_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Projects_Stddev_Fields = {
  __typename?: 'projects_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Projects_Stddev_Pop_Fields = {
  __typename?: 'projects_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Projects_Stddev_Samp_Fields = {
  __typename?: 'projects_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Projects_Sum_Fields = {
  __typename?: 'projects_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Projects_Var_Pop_Fields = {
  __typename?: 'projects_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Projects_Var_Samp_Fields = {
  __typename?: 'projects_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Projects_Variance_Fields = {
  __typename?: 'projects_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory: Array<_Fuzzysearch_Directory>;
  /** fetch aggregated fields from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "_fuzzysearch.directory" using primary key columns */
  _fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" which returns "_fuzzysearch.directory" */
  _fuzzysearch_search: Array<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" and query aggregates on result of table type "_fuzzysearch.directory" */
  _fuzzysearch_search_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "elements" */
  elements: Array<Elements>;
  /** fetch aggregated fields from the table: "elements" */
  elements_aggregate: Elements_Aggregate;
  /** fetch data from the table: "pages" */
  pages: Array<Pages>;
  /** fetch aggregated fields from the table: "pages" */
  pages_aggregate: Pages_Aggregate;
  /** fetch data from the table: "phone" */
  phone: Array<Phone>;
  /** fetch aggregated fields from the table: "phone" */
  phone_aggregate: Phone_Aggregate;
  /** fetch data from the table: "phone" using primary key columns */
  phone_by_pk?: Maybe<Phone>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


export type Query_Root_Fuzzysearch_DirectoryArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Directory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_Root_Fuzzysearch_SearchArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_Root_Fuzzysearch_Search_AggregateArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Query_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootElementsArgs = {
  distinct_on?: InputMaybe<Array<Elements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Elements_Order_By>>;
  where?: InputMaybe<Elements_Bool_Exp>;
};


export type Query_RootElements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Elements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Elements_Order_By>>;
  where?: InputMaybe<Elements_Bool_Exp>;
};


export type Query_RootPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Query_RootPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Query_RootPhoneArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Query_RootPhone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Query_RootPhone_By_PkArgs = {
  contact_id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory: Array<_Fuzzysearch_Directory>;
  /** fetch aggregated fields from the table: "_fuzzysearch.directory" */
  _fuzzysearch_directory_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "_fuzzysearch.directory" using primary key columns */
  _fuzzysearch_directory_by_pk?: Maybe<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" which returns "_fuzzysearch.directory" */
  _fuzzysearch_search: Array<_Fuzzysearch_Directory>;
  /** execute function "_fuzzysearch.search" and query aggregates on result of table type "_fuzzysearch.directory" */
  _fuzzysearch_search_aggregate: _Fuzzysearch_Directory_Aggregate;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "elements" */
  elements: Array<Elements>;
  /** fetch aggregated fields from the table: "elements" */
  elements_aggregate: Elements_Aggregate;
  /** fetch data from the table: "pages" */
  pages: Array<Pages>;
  /** fetch aggregated fields from the table: "pages" */
  pages_aggregate: Pages_Aggregate;
  /** fetch data from the table: "phone" */
  phone: Array<Phone>;
  /** fetch aggregated fields from the table: "phone" */
  phone_aggregate: Phone_Aggregate;
  /** fetch data from the table: "phone" using primary key columns */
  phone_by_pk?: Maybe<Phone>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


export type Subscription_Root_Fuzzysearch_DirectoryArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Directory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Directory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_Root_Fuzzysearch_SearchArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_Root_Fuzzysearch_Search_AggregateArgs = {
  args: _Fuzzysearch_Search_Args;
  distinct_on?: InputMaybe<Array<_Fuzzysearch_Directory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Fuzzysearch_Directory_Order_By>>;
  where?: InputMaybe<_Fuzzysearch_Directory_Bool_Exp>;
};


export type Subscription_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootElementsArgs = {
  distinct_on?: InputMaybe<Array<Elements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Elements_Order_By>>;
  where?: InputMaybe<Elements_Bool_Exp>;
};


export type Subscription_RootElements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Elements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Elements_Order_By>>;
  where?: InputMaybe<Elements_Bool_Exp>;
};


export type Subscription_RootPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPhoneArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Subscription_RootPhone_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phone_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phone_Order_By>>;
  where?: InputMaybe<Phone_Bool_Exp>;
};


export type Subscription_RootPhone_By_PkArgs = {
  contact_id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GetContactListQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Contact_Select_Column> | Contact_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Order_By> | Contact_Order_By>;
}>;


export type GetContactListQuery = { __typename?: 'query_root', contact: Array<{ __typename?: 'contact', created_at: any, first_name: string, id: number, last_name: string, phones: Array<{ __typename?: 'phone', number: string }> }> };


export const GetContactListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContactList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"contact_select_column"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"contact_order_by"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct_on"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"phones"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]}}]} as unknown as DocumentNode<GetContactListQuery, GetContactListQueryVariables>;