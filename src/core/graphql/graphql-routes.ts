export abstract class GraphQLRoutes {
    static readonly GraphQL = '/bciapi-graphql/';
    protected constructor() {
        throw new Error(`Abstract ${GraphQLRoutes.name} class cannot be instantiated !`);
    }
}
