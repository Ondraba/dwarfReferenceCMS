import gql from 'graphql-tag';

export default gql`
    query ContentDetailQuery($id: ID!){
        contentDetail(id: $id){
            id
            title
            main
            header
            footer
            state
            url    
            comments {
                id
                by
                body
                likes
            }
        }
    }
`;