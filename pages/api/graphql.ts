import "reflect-metadata";

import { ApolloServer } from "apollo-server-micro";
import { buildSchema} from "type-graphql";
import { PortfolioResolver } from "../../src/schema/portfolio.resolver";

const schema = await buildSchema({ resolvers:[PortfolioResolver] });

const server=new ApolloServer({
  schema,
});



export const config={
     api:{
          bodyParser:false
     }
}

const startServer=server.start();

export default async function handler(req,res) {
     await startServer;
     await server.createHandler({path:"/api/graphql"})(req,res)
}
