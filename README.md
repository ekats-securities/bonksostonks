# BonkO'Stonk - an AVAX subnet for bustable trad-fi trades

The [Avalanche](https://docs.avax.network/) platform is a flexible, "enterprise-grade" blockchain framework that makes it easy to launch decentralized applications. Their website lists it as "the first decentralized smart contracts platform built for the scale of global finance, with near-instance transaction finality."

## Quickstart

You can customize your avalanche config by editing the `docker/node/avalanche-config.json` file with any of the config flags listed in the [Avalanche config flags](https://docs.avax.network/build/references/avalanchego-config-flags) document page.

Once you're satisfied, build your docker compose nodes using the command:

```bash
just container-build
```

Launch the network by running:

```bash
just container-up
```

In order to use the CLI, you must build it using `yarn` or `npm`. Make sure you have all of the dependencies with `install`:

```bash
npm install
## or
yarn install
```

Build the cli with the build command:

```bash
npm run build
## or
yarn build
```

##
https://docs.google.com/presentation/d/1To0RKxDS2Du4aTW-1kZA8b9T-r4ZDNLB9fXP6UGrDK8/edit?usp=sharing

## TODO:

- [X] Deployed AVAX subnet on Fuji
- [X] Realized Gnosis Wallet on Fuji was impossible
- [X] Deployed Gnosis Wallet on Mainnet
- [X] Created C chain contracts for BonkOStonk on Fuji & Mainnet
- [X] Add C chain CLI commands
- [X] Ported Pankcake swap UI to AVAX subnet
- [ ] Add X chain CLI commands
- [ ] Investigate auto-generating options from source
- [x] Extend to be able to be launched using Kubernetes