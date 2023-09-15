import {gql} from '@apollo/client'

export const QUERY_GET_CONTACT_LIST = gql`
  query GetContactList (
    $distinct_on: [contact_select_column!], 
    $limit: Int, 
    $offset: Int, 
    $order_by: [contact_order_by!]
) {
  contact(
      distinct_on: $distinct_on, 
      limit: $limit, 
      offset: $offset, 
      order_by: $order_by
  ){
    created_at
    first_name
    id
    last_name
    phones {
      number
    }
  }
}
`

export const QUERY_GET_CONTACT_DETAIL = gql`
  query GetContactDetail($id: Int!){
    contact_by_pk(id: $id) {
    last_name
    id
    first_name
    created_at
    phones {
      number
    }
  }
}
`

export const QUERY_GET_PHONE_LIST = gql`
  query GetPhoneList(
    $where: phone_bool_exp, 
    $distinct_on: [phone_select_column!], 
    $limit: Int = 10, 
    $offset: Int = 0, 
    $order_by: [phone_order_by!]
) {
  phone(where: $where, distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by) {
    contact {
      last_name
      first_name
      id
    }
    number
  }
}
`

export const ADD_CONTACT_WITH_PHONES = gql`
  mutation AddContactWithPhones(
    $first_name: String!, 
    $last_name: String!, 
    $phones: [phone_insert_input!]!
    ) {
  insert_contact(
      objects: {
          first_name: $first_name, 
          last_name: 
          $last_name, phones: { 
              data: $phones
            }
        }
    ) {
    returning {
      first_name
      last_name
      id
      phones {
        number
      }
    }
  }
}
`