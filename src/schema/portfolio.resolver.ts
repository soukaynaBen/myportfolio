import { Resolver, Query } from "type-graphql";
import { Portfolio } from "./portfolio";
import portfolio from "./portfolio.json";

@Resolver(Portfolio)
export class PortfolioResolver{
     @Query(()=>[Portfolio])
     portfolios():Portfolio[]{
          return  portfolio
     }
}
