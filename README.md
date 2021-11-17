# aavegotchi-svg-subgraph

This subgraph allows you to query for the images of the aavegotchi.
It listens on the claim gotchi as well as the equipWearables aavegotchi.
You can query for current, but also for the past.

Examples can be found here: [SVG Docs](https://docs.aavegotchi.com/subgraphs/svg-subgraph)

If you miss something or found a bug please feel free to create an issue.

## Development

If you never worked with the graph before. We recommend to take some time to understand the core concepts of the graph. A good entry is their [TheGraph Docs](https://thegraph.com/docs/developer/quick-start).

1. Start a graph node, connected to an Polygon Archive Node. 
2. In order to install all lib please run ```yarn```
3. If the graph node runs locally you can simply run ```yarn create-local``` which creates the subgraph on the graph node. 
4. Afterwards you run ```yarn deploy-local``` which deploys the subgraph to the graph nodes and the indexing process starts. This can take up to 24 hours.

## Contact

You can find us at the Aavegotchi Discord
- Coderdan
- Frank Pfeift
