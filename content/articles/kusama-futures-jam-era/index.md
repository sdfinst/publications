---
id: kusama-futures-jam-era
slug: kusama-futures-jam-era
title: Kusama Futures in the JAM Era
summary: Five structural futures for KSM DAO in the JAM era.
authors:
  - Emiel Sebastiaan
  - Arief Ernst
published: 2026-08-24
updated: 2026-08-24
tags:
  - kusama
  - polkadot
  - jam
  - governance
  - tokenomics
status: published
publicationType: discussion-draft
edition: 0.1.0
license: CC-BY-4.0
---

# Kusama Futures in the JAM Era

## Five Structural Futures for KSM DAO

*Discussion Draft on technical feasibility, economic sustainability and political sovereignty. 
24 August 2026 by Emiel Sebastiaan and Arief Ernst on behalf of [SDFI BV](https://sdf.institute).*

> **Scope.** This paper is addressed first to KSM DAO: the KSM-holder governance community acting through Kusama OpenGov. It attempts to open a discussion on Kusama’s future in the JAM Era and its sovereignty implications. This discussion paper **does not request any immediate transfer of funds**, authorise a migration, or supersede WFC #573 without a new KSM DAO governance decision. Any cohabitation arrangement as a result of this discussion would also require discussion with, and probably parallel approval by DOT DAO.
> 

**Terminology.** For the discussion outlined in this paper, **JAM Prime** means the canonical Polkadot-aligned JAM instance that will likely succeed the Polkadot relay chain. JAM Prime is descriptive and is not an official network name. **KSM DAO** and **DOT DAO** are used as shorthand for the respective token-holder governance communities; they are not assumed to be legal persons.

**Disclosures and acknowledgements.** The authors write from informed positions. Primary author leads a JAM Implementation project, and his engineering team was the first to fully complete Milestone 1 of the JAM Prize. Additionally, the primary author has business interests in staking operations, in ventures seeking to research and utilise JAM infrastructure, and has economic exposure to both ecosystems. Views expressed are authors’ own and do not represent other JAM implementers or related organisations. Any mandate to pursue or implement the scenarios discussed ultimately rests with KSM DAO and, where Polkadot resources or commitments are involved, potentially with DOT DAO. AI tools were used to assist with research, drafting and editing; the authors take full responsibility and ownership for the arguments, suggestions and conclusions presented. Thanks are due to fellow JAM implementers who provided technical review; such review does not imply endorsement of the paper’s suggestions and conclusions. The authors remain committed to moderating the discussion that follows.

## Summary

Kusama’s central JAM-era problem is the economic burden of maintaining an independent security substrate at a scale that no longer fits the KSM economy.

Kusama now operates with 700 validators following Referendum #655. Under the explicit working assumption of **$3,000 per validator per month** for sustainable professional operation, that represents **$2.1 million per month** and **$25.2 million per year**. Against a reference KSM market capitalisation of approximately **$55.1 million on 12 August 2026**, the annual cost equals roughly **45.7% of the network’s market value**. At an unchanged token price, financing the full amount through new KSM would require monetary-base expansion approaching 46% per year.

This is a stress test, not a claim about Kusama’s current inflation or validator payouts. Its purpose is to expose a structural mismatch: without major change, a small economy cannot indefinitely finance a large, duplicated validator system without dilution, concentration, reduced resilience or external subsidy.

With the delivery of JAM on the horizon and a potential upgrade for Kusama to this new infrastructure technology, KSM DAO is faced with a new design space. This paper explores 5 scenarios and their trade-offs around sovereignty, security and economic burden:

1. **Status quo:** continue and progressively downsize the relay-chain Kusama.
2. **DOT/KSM economy merger or acquisition:** consolidate the economies.
3. **Lightweight and/or Low-Latency Kusama JAM:** operate an independent KSM-secured JAM with fewer active validators, Slipstream JAM latency, or both.
4. **Full Kusama JAM:** launch a standard full-scale JAM under the KSM economy and governance.
5. **Kusama/Polkadot Cohabitation JAM:** maintain two political and economic jurisdictions on one JAM through recurring burden sharing or a wholesale security-and-resource endowment.

The preliminary conclusion is that the status quo is a bridge; merger or acquisition is politically implausible or would end Kusama’s existence; WFC #573 remains the legitimate independent fallback with caveats; a full Kusama JAM is least compatible with Kusama’s economic scale; and cohabitation, particularly a wholesale security-and-resource endowment secured by DOT DAO’s staking economy, now deserves formal technical, economic and constitutional study.

This is not yet a proposal for Kusama to buy a place on JAM Prime. Resource needs, control rights, security guarantees and migration obligations should be defined first.

Kusama’s central JAM-era question is not whether it should preserve every element of its present infrastructure. It is **which infrastructure arrangement can sustainably preserve Kusama as a distinct political, economic and experimental cypherpunk jurisdiction**.

## 1. Origins of Kusama

Kusama was announced in July 2019 as an early, unaudited and economically real release of Polkadot: a place where governance, staking, validation and parachain-related technology could be exercised under conditions that mattered [1]. It was not a conventional testnet. KSM had value [2], operators incurred costs, governance decisions affected real assets and there was no central kill switch. At its third launch attempt Kusama’s first block followed in November 2019 [3].

This origin gave Kusama three intertwined characteristics.

1. Kusama was **experimental**. It was expected to accept technical, economic and social risks that Polkadot, as the more stability-oriented network, would not.
2. Kusama was **economically consequential**. Experiments took place among actors with real incentives, real capital and real exposure to failure.
3. Kusama was **infrastructurally independent**. It possessed its own relay chain, validator set, staking economy, governance system, treasury and parachain ecosystem.

Under the relay-chain architecture, these characteristics appeared to form one indivisible package. Political sovereignty, economic sovereignty and infrastructure sovereignty largely coincided. To remain a distinct sovereign network seemed to require a separate replicated state machine and a separate validator economy.

Kusama’s origin also included a broader economic commitment. One per cent of Polkadot’s genesis DOT supply was reserved as an eventual incentive for Kusama’s stakeholders and community, although the precise mechanism was left open [1].

## 2. Baseline evaluation from 2025 onwards

This section establishes the **current baseline for evaluating Kusama’s future**. Since 2025, KSM DAO has adopted a new mission, expressed an initial JAM preference, begun reducing its validator burden, and gained new information about JAM’s architecture, economics and migration path. These developments matter because they materially change the design space within which the scenarios in Section 3 should be assessed.

### 2.1 Kusama adopted a new mission

The most important 2025 change was constitutional rather than technical.

WFC #498 was executed in early 2025. It revived the original economic commitment to Kusama by asking Web3 Foundation to deploy 10 million DOT for Kusama’s sole benefit, while at the same time recognising Kusama as an **experiment-centric peer network of Polkadot** rather than merely its canary [4]. The proposal described a flexible programme to be developed over time.

Web3 Foundation’s accompanying proposal envisaged a programme lasting at least two years, with possible grants, bounties, events, project support and subsidized infrastructure. It identified zero-knowledge technologies, proof of personhood and art & social experimentation as representative areas of development, while expressly presenting these as examples rather than detailed instructions [4][5].

The Kusama Vision and its associated initiatives reinforce this shift [6][7][8][9]. Kusama’s future infrastructure should therefore be judged by whether it enables a distinctive experimental and cypherpunk mission.

### 2.2 JAM changes the relationship between sovereignty and infrastructure

JAM changes an architectural assumption that was largely implicit in Kusama’s original design: that sovereignty over a blockchain jurisdiction requires sovereignty over the entire replicated infrastructure beneath it. Under the relay-chain model, the relay chain combines consensus, validator selection, staking, execution, availability, governance and the allocation of parachain capacity within one network. A sovereign Kusama therefore naturally implied a separate relay chain, validator set and staking economy.

JAM separates several of these functions [10]. Its validator substrate provides shared consensus, data availability and computation, while persistent **services** provide programmable jurisdictions above it. Services can hold state, execute their own logic, control other services, hold privileges and participate in the allocation and authorization of cores. Scarce computational capacity and state footprint can therefore be treated as resources whose control can, at least in principle, be separated from ownership of the validator substrate itself. This creates a materially different sovereignty model.

For Kusama, the important differences are:

| Relay-chain model | JAM model | Sovereignty implication |
| --- | --- | --- |
| Network and validator set define the jurisdiction | Multiple service jurisdictions can inhabit one computer | A separate political jurisdiction need not imply a separate validator network |
| Security is funded by the network’s native staking economy | Validator security may secure multiple service economies | KSM need not necessarily participate in the staking economy |
| Parachain capacity is allocated by the relay-chain system | Cores are explicit programmable resources with assignment and authorization privileges | KSM DAO could control dedicated capacity without controlling all JAM infrastructure |
| Relay-chain governance controls the base system and its runtime | Service logic and base-protocol logic are more clearly separated | KSM DAO may retain service-level constitutional authority while depending on another governance system for the base protocol |
| Native token, staking and base security are tightly coupled | Service-level economic logic can be distinct from validator economics | KSM monetary policy can potentially remain independent of the security token |
| State and execution are properties of the sovereign chain | Service state exists within a shared coherent state machine | Sovereignty requires explicit rights over footprint as well as compute and governance privileges |
| Independence means operating the full infrastructure stack | Independence becomes divisible across political, economic, resource and infrastructure layers | Sovereignty becomes a bundle of rights rather than a binary property |
| Forking the chain provides the ultimate infrastructure exit | A service jurisdiction depends on portability of state and a viable destination | Exit and state portability become important constitutional safeguards |

This does not mean that infrastructure dependence disappears. A Kusama jurisdiction on JAM Prime would still depend on its validator set, base protocol, auditing and availability rules, privileged services and ultimately the governance capable of changing them. The difference is that **these dependencies can now be distinguished from the powers that constitute Kusama itself**: KSM issuance, treasury governance, runtime or service code governance, internal resource allocation, application policy and the disposition of Kusama-controlled resources.

The constitutional question is therefore no longer simply whether Kusama operates an “independent JAM” or a “shared JAM”. It is:

> **Which powers must KSM DAO control directly, which security functions may be outsourced, which resource rights must be guaranteed, and what dependencies can Kusama accept without compromising its mission or credible ability to exit?**
> 

### 2.3 Kusama expressed an initial JAM preference

KSM DAO then adopted WFC #573, supporting an independent lightweight JAM with an indicative configuration of 32 cores, one-second blocks and KSM performing the native economic functions of storage, staking and coretime [11]. The referendum was executed and remains the clearest existing expression of Kusama’s preference for a JAM future.

Its companion, WFC #574, proposed a full standard JAM designed for Polkadot eventually to join, with multi-token economics and shared security costs. It acknowledged that Kusama could not afford a full-scale JAM alone and that any shared arrangement would require both communities to approve a fair economic settlement [12]. It was rejected with approximately 99.9% of conviction-weighted votes cast against it.

WFC #573 thus remains the present political baseline. Since this WFC was enacted a clearer understanding has emerged of how JAM can provide protocol-level guarantees over service privileges, resource assignment and authorization, allowing meaningful jurisdictional control to be separated from ownership of the underlying validator infrastructure. Furthermore, WFC #573 was not evaluated against the wider set of architectural and economic alternatives now considered in this paper as part of a broader design-space exploration. The contribution of this paper is to dissect and isolate the different design space directions presented in WFC #573 & 574. Material new information can justify reopening this design space, but only through transparent discussion and a later KSM DAO decision.

### 2.4 Current security burden no longer fits the economy

In 2026, Referendum #655 reduced Kusama’s validator set from 1,000 to 700. The proposal described this as a first step, not a commitment to the full suggested path toward 120 validators, and noted increasing difficulty for singleton validators to operate economically [13]. The underlying forum discussion additionally argued that Kusama was substantially over-provisioned relative to coretime demand and proposed reducing both validators and available cores in stages [14]. Polkadot’s Dynamic Allocation Pool proposals are relevant to this transition because they seek to adapt validator participation to actual core demand, although they do not settle Kusama’s long-term JAM architecture [15][16].

The scale of the current security burden can be illustrated with a simple working assumption. With **700 active validators** and an estimated **sustainable full operating cost of $3,000 per validator per month**, the aggregate cost of validation would be approximately **$2.1 million per month**, or **$25.2 million per year**. Against a reference KSM market capitalisation of **$55.1 million on 12 August 2026** [17], this annual operating-cost estimate alone is equivalent to approximately **45.7% of the network’s market capitalisation**.

The $3,000 figure is an explicit discussion assumption and should be replaced by independent benchmarking before any binding decision. It is intended to represent sustainable professional operation, including hardware, bandwidth, monitoring, maintenance, personnel, redundancy, business overhead and an adequate operating margin, rather than merely the marginal rental price of a server.

Importantly, the **$25.2 million estimate covers only the operating cost of validation**. Proof-of-stake security also requires substantial capital to be bonded and exposed to protocol risk. That capital has an opportunity cost and requires compensation for illiquidity, slashing risk and alternative uses of capital. The staking economy must ultimately fund this return as well. Once this capital cost is included, the economic burden of sustaining the current security model becomes materially larger than the operating-cost estimate alone. Depending on the amount of economically required stake and the return demanded by capital providers, the combined annual burden could plausibly approach the order of Kusama’s entire current market capitalisation.

Market capitalisation is not a treasury balance or a security budget. It fluctuates and cannot be spent directly. Its relevance is comparative: validator and staking rewards funded by issuance are denominated in KSM, while most validator operating costs and the opportunity cost expected by capital providers are ultimately measured against external economic alternatives. At a constant token price, financing **$25.2 million of annual validator operating costs through issuance alone would require newly issued KSM equal in value to roughly 45.7% of the existing network value each year**. Once the required return on bonded capital is added, the underlying sustainability problem becomes significantly more severe.

### 2.5 Fiscal and Security-Budget Rationalisation

The need to reconsider Kusama’s security expenditure is part of a fiscal-discipline discussion already underway within Polkadot. At the Web3 Summit in 2025, Gavin Wood argued that Polkadot needed to become more disciplined about the cost of its existing staking and security model [18]. This was followed by WFC #1710, through which DOT DAO adopted a capped and stepped supply schedule and explicitly committed itself to long-term fiscal responsibility [19]. The referendum identified the proposed Revenue Pot as a next step: separating staking and validator remuneration from mechanical block issuance while making protocol revenue increasingly important to meeting protocol expenses. The subsequent **Dynamic Allocation Pool (DAP)** initiative develops this logic into a broader fiscal architecture [15][16]. The DAP treats issuance and protocol revenue as constrained inflows from which different expenditures can be budgeted, rather than treating staking rewards, validator compensation and security expenditure as one indivisible mechanism. Its longer-term design explicitly separates nominator returns from the security and operational costs of validators and aims progressively to finance protocol expenses from protocol income rather than newly minted DOT [15][16]. In other words, Polkadot has already begun moving from an **issuance-defined security budget toward an explicitly managed security budget**.

This development sits within a much older and broader problem in blockchain economics. **Bitcoin provides the canonical limiting case.** Its monetary design deliberately reduces the block subsidy over time, with the original white paper anticipating that miner incentives could eventually transition entirely from newly issued BTC to transaction fees [20]. The resulting long-run security-budget question is well known: if issuance approaches zero, sufficient demand for blockspace must generate enough fee revenue to sustain the mining expenditure required for security. Proposals for perpetual or conditional *tail emission* periodically reopen the alternative—maintaining some continuing issuance if the fee market proves insufficient [21][22]. Bitcoin therefore exposes the fundamental trade-off particularly clearly: **security expenditure must ultimately be supported either by issuance or by economic revenue; fixing the monetary subsidy forces the security system to adapt to the revenue available to sustain it.**

**Ethereum’s current issuance debate approaches the same problem from the opposite direction.** EIP-8363, *Tapered Issuance Burn*—initially circulated under EIP-8361 before being renumbered—questions whether continually attracting more ETH into staking actually produces proportional additional security [23][24]. The proposal argues that beyond some point the marginal security benefit of additional stake declines while issuance continues to dilute unstaked ETH and may encourage concentration in custodians, liquid-staking providers and institutional operators. It therefore proposes progressively burning a larger fraction of validator issuance as the staking ratio rises, eventually removing the issuance incentive for additional staking around a 50% staking ratio. The important principle for this discussion is not the specific mechanism, which remains contested, but its premise: **more capital committed to consensus is not automatically better, and an economically rational security system should distinguish useful security from excess security expenditure.**

**Solana has made that principle even more explicit.** SIMD-0228 proposed replacing its fixed emissions trajectory with a market-responsive mechanism based on staking participation [25]. Its motivation states that token issuance exists to attract the stake required for security and defines the efficient level of issuance as the **“Minimum Necessary Amount”** required to secure the network. The proposal therefore sought to reduce emissions when staking participation exceeded the required level and permit higher issuance if participation became insufficient. SIMD-0228 failed to reach quorum, in part because the proposed dynamic mechanism was considered too complex and unpredictable. The underlying fiscal question, however, remained unresolved. In 2026 SIMD-0550 returned with a simpler proposal to double Solana’s disinflation rate from 15% to 30%, explicitly citing the continuing appetite to reduce nominal inflation after SIMD-0228 [26].

These debates are important because they show that **security-budget rationalisation is not equivalent to simply cutting validator rewards**. Bitcoin demonstrates the risk of reducing subsidy without sufficient replacement revenue; Ethereum’s debate asks whether excessive staking can itself undermine monetary and decentralization objectives; and Solana’s debate asks how to identify the minimum expenditure required to preserve consensus safety without unnecessarily diluting the token economy. In each case, the difficult question is not whether security should be cheaper, but **what security outcome is actually required, what it costs, and who ultimately pays for it**. The same direction is visible elsewhere [27][28][29][30]. These cases are different in architecture and motivation, but collectively reinforce the broader shift from **bootstrap economics toward deliberate fiscal and infrastructure management**.

For Kusama, JAM makes this question substantially broader than merely choosing the appropriate number of validators. Security, computation and political jurisdiction can increasingly be separated. Kusama could reduce an independent security system, share one, procure access to another one, or separate its political and economic jurisdiction from ownership of the underlying validator infrastructure. The relevant comparison is therefore not simply *700 versus 120 validators*, but the **total economic cost of obtaining the security, capacity and sovereign guarantees that Kusama actually requires**.

Under the current model, however, a large security budget must ultimately be financed by the KSM economy. Where protocol revenue is insufficient, the residual burden falls primarily on issuance. This creates the conditions for a possible **security-budget death spiral**:

1. validators incur recurring fiat costs;
2. the protocol issues KSM to remunerate them;
3. some rewards must be sold to pay those costs;
4. dilution and sell pressure can weaken the token price;
5. a lower price requires more KSM to fund the same real security budget; and
6. inadequate remuneration then encourages validator exit, consolidation or reduced service quality.

This is a risk mechanism, not a deterministic forecast. Token prices have many drivers, validators may retain rewards and actual costs may be lower. The point is narrower: where a security budget depends heavily on issuance, sustaining a given real level of security can become progressively more difficult if the economic value of the token declines. Kusama’s own governance discussions now acknowledge both validator distress and the need to resize [13][14][31].

Something therefore has got to give. The available responses are to **reduce the security system, share it, procure access to another one, consolidate economies, or generate sufficient non-inflationary revenue to sustain it**. The broader industry discussion suggests a useful principle for evaluating these choices: **security expenditure should be justified by the security actually required and increasingly supported by the economic activity it protects, rather than inherited indefinitely from an earlier stage of network development.** Doing nothing is itself a choice for continuing economic compression.

### 2.6 Lightweight JAM became more plausible, but not proven secure

WFC #573 assumed that a smaller Kusama JAM would require a non-standard protocol configuration. Since then, Gray Paper work has explicitly added support for smaller validator sets. PR #514 allows fewer than 1,023 validators, requires a multiple of three with a minimum of six, and scales the number of **active** cores with active validators while retaining 341 nominal core indices [32]. Gray Paper v0.8.0 incorporated this change [33].

This materially improves the technical feasibility of a lightweight JAM. It also means that WFC #573’s “32 cores” should now be interpreted as a target active-capacity profile rather than necessarily as a separate hard-coded total-core architecture.

It does not settle the security question. Smaller validator sets alter adversarial assumptions, operator diversity, erasure-coding efficiency and the economics of implementation diversity. Specification support means the configuration is expressible; it does not mean that a particular small network has security equivalent to JAM Prime. Those questions remain active subjects of technical discussion [34][35]. A 32 core JAM may not be sufficiently secure.

### 2.7 Low latency is a separate design choice

**Slipstream JAM** proposes one-second block and work-package periods while retaining longer shared-context and auditing structures to preserve more of standard JAM’s throughput [36]. Its purpose is to reduce apparent accumulation latency and open near-real-time applications without simply dividing every data boundary by six.

Slipstream is conceptually distinct from a lightweight validator set. Kusama could pursue:

- fewer active validators and cores at standard latency without Slipstream JAM;
- low-latency Slipstream with a larger validator and capacity profile; or
- the combined lightweight, and low-latency design as described in WFC #573.

Separating these choices matters. A smaller security budget and lower latency introduce different risks and should be benchmarked independently before they are bundled into a single migration.

That all being said, it has now become clear, given Slipstream JAM’s current status, that it remains a mere research idea for future follow-up and will not be part of Gray Paper v1.0 and thus not a viable option to take into consideration in the near future.

### 2.8 JAM resource rights became clearer

JAM’s design has also evolved toward treating cores and service privileges as controllable resources. Gray Paper releases introduced property-like core assignment, owned privileges and *gratis* storage-deposit offsets for service accounts [37][38][10]. These mechanisms support a model in which KSM-governed services control a portfolio of cores and determines which Kusama workloads may use them, even when the underlying validator set is shared.

At the same time, it has become clearer that compute is not the only scarce resource. Coretime gives access to computation; it does not by itself guarantee indefinite use of **footprint** (coherent state) held in every validator’s memory. The proposed JAMKB mechanism would map a fixed resource-access token to JAM state footprint, with the initial supply controlled by DOT DAO [39][40]. JAMKB remains a design proposal, not yet adopted protocol economics, but it exposes a real settlement requirement: a Kusama jurisdiction on JAM Prime would need both compute and footprint rights.

### 2.9 Migration remains unfinished

Among others the JAM Parachain Service and Cumulus-on-JAM scope are all under active development. As of publication, the relevant pull requests remain open [41][42][43][44]. Polkadot itself (and by proxy existing Kusama system chains and parachains) therefore do not yet have a finalized, audited migration path.

This is not an argument against choosing a strategic direction. It is an argument against presenting any scenario as immediately executable.

## 3. Scenarios for the Future of Kusama

The scenarios below separate three questions wherever possible:

- **Technical:** What system is operated, and by whom?
- **Economic:** Which economy pays for security and scarce resources?
- **Political:** Which community controls the relevant decisions, and what identity survives?

### 3.1 Scenario 1 — Status Quo

**Definition.** Kusama continues to operate its relay-chain architecture, while progressively reducing validators and cores to better match actual demand. JAM research and migration work continue without committing to a final destination.

#### 3.1.1 Analysis

**Technical structure.** This is the only immediately operational scenario. KSM DAO, staking, system chains, bridges, tooling and parachain operations already exist. Referendum #655 has begun the resizing process, and further reductions can be staged and observed before proceeding [13][14].

**Economic structure.** A smaller validator set lowers recurring expenditure. It does not remove the fixed engineering, release, monitoring, audit and incident-response burden of operating a second base layer. Nor does it eliminate the link between KSM issuance and validator remuneration.

**Political consequence.** KSM DAO retains maximum direct infrastructure control and avoids an immediate constitutional negotiation with DOT DAO. The cost is strategic delay: application teams, system-chain maintainers and infrastructure providers remain uncertain about the eventual migration target.

**Key limitation.** Status quo is not a neutral long-term choice. JAM is being developed as a replacement for the Polkadot relay chain under Polkadot Referendum #682 [45]. Continuing Kusama’s present architecture indefinitely would require a separate long-term technical mandate and maintenance constituency and would disregard technical advancements offered by JAM.

#### 3.1.2 Provisional assessment

The status quo is a **reasonable bridge scenario and a weak destination scenario**.

### 3.2 Scenario 2 — DOT/KSM Economy Merger or Acquisition

**Definition.** The two token economies consolidate rather than coexist. One economy acquires or replaces the other, and one security budget remains.

#### 3.2.1 Analysis: KSM buys out DOT

In this variant, KSM becomes the surviving base economy and Polkadot workloads migrate under it. DOT holders would need to exchange their economic and governance position for KSM, claims on KSM, or another negotiated consideration.

**Technical.** Consolidating onto one JAM is conceivable in the abstract.

**Economic.** The relative capitalisation, liquidity and institutional position of KSM make acquisition of the DOT economy highly implausible. Any exchange ratio would be difficult to finance and defend.

**Political.** DOT DAO would have to consent to surrendering its base economic role to the smaller network. There is no present evidence of such a mandate.

#### 3.2.2 Analysis: DOT buys out KSM

In this variant, KSM holders receive DOT or another consideration, Kusama workloads are absorbed into the Polkadot economy and KSM is retired or loses its independent monetary role.

**Technical.** Consolidating onto one JAM is conceivable in the abstract. This is the cleanest consolidation of infrastructure and economic security.

**Economic.** Economically, DOT acquiring KSM is plausible because the larger economy could in principle compensate KSM holders at an agreed exchange ratio or valuation. It would also eliminate the duplicated KSM security budget. The difficult questions are instead valuation, financing, treatment of treasury assets and outstanding obligations, and whether KSM holders regard the consideration as sufficient compensation for extinguishing their independent economic position.

**Political.** Politically, it is feasible only with explicit KSM DAO consent. DOT DAO cannot meaningfully **buy** Kusama merely by offering consideration: KSM holders would have to approve the retirement, conversion or loss of KSM’s monetary and governance role. This therefore amounts less to a conventional acquisition than to a negotiated constitutional dissolution and economic settlement.

#### 3.2.3 Provisional assessment

Merger or acquisition is useful as a boundary case because it clarifies what cohabitation is **not**. It should not be treated as a preferred scenario unless KSM DAO first concludes that preserving Kusama as a separate economy is no longer an objective.

### 3.3 Scenario 3 — Lightweight and/or Low-Latency Kusama JAM

**Definition.** Kusama launches an independent JAM secured by KSM, but differentiates it from JAM Prime through a smaller active validator/core profile, a lower-latency protocol variant, or both.

#### 3.3.1 Analysis: Lightweight only

Kusama uses standard or near-standard JAM timing while activating substantially fewer validators and cores. Gray Paper v0.8.0 makes this technically expressible [32][33].

The principal benefit is cost reduction without surrendering infrastructure sovereignty. The principal risk is that fixed costs do not decline in direct proportion to the number of active cores. Kusama would still require a staking economy, conformance testing, security review, networking, release management, monitoring, incident response and base-protocol governance.

#### 3.3.2 Analysis: Low Latency only

Kusama pursues Slipstream or another low-latency configuration while retaining a comparatively large validator set and capacity profile [36].

This could create genuine product differentiation for gaming, media, market infrastructure or interactive applications. It does not solve the security-budget problem by itself. Indeed, higher operational requirements could increase the sustainable cost per validator.

#### 3.3.3 Analysis: Combined Lightweight and Low Latency

WFC #573 endorsed an indicative configuration of approximately **32 active cores and one-second timing**, with KSM performing the native economic functions [11][46]. That configuration should be acknowledged as the current political reference point, but it need not be treated as technically fixed. The relevant question for this scenario is whether 32 cores and one-second timing—or another lightweight and/or low-latency configuration—can be supported by sufficient evidence on security, performance, capacity and economic sustainability.

**Technical structure.** Kusama would operate its own JAM instance with a reduced active validator and core profile relative to JAM Prime, potentially combined with modified timing parameters. The viable configuration would need to establish a defensible relationship between validator count, active cores, security, data-availability assumptions, throughput, latency and implementation requirements. Lightweight operation and low latency should therefore be benchmarked separately before determining whether they should be combined.

**Economic structure.** The validator budget would be smaller than under a standard JAM, but would remain a recurring KSM obligation. The magnitude of that saving depends on the eventual validator and core configuration and on fixed engineering and operational costs that do not scale directly with network size. WFC #573’s approximately 2.4% worst-case inflation estimate should therefore be treated as an earlier proposal assumption rather than as an established cost of this scenario.

**Political consequence.** This scenario remains closest to the existing direction expressed through WFC #573 and preserves maximal infrastructure sovereignty under KSM DAO. However, adopting the general direction of an independent lightweight JAM does not necessarily require preserving every parameter originally proposed. It requires no approval from DOT DAO.

#### 3.3.4 Provisional assessment

An independent lightweight JAM is the **strongest infrastructure-sovereignty option** and should remain Kusama’s credible fallback. Its adoption should depend on evidence that its incremental autonomy justifies or is capable of sustaining its continuing security and engineering burden.

### 3.4 Scenario 4 — Full Kusama JAM

**Definition.** Kusama launches a standard full-power JAM under the KSM economy. It retains full compatibility with the Polkadot-aligned specification and could, in principle, become the infrastructure onto which Polkadot later migrates. 

#### 3.4.1 Analysis

Important note on contrasting this scenario with **cohabitation** which is explored scenario 5: This was the launch direction contemplated in WFC #574: Kusama would implement a full standard JAM designed for Polkadot eventually to join and share costs [12]. Scenario 4 evaluates the position before such a cohabitation settlement exists, or the outcome if Polkadot never joins which at time of writing should be the default assumption [47].

**Technical structure.** Kusama gains standard JAM capacity, maximum protocol compatibility and a full JAM validator substrate under its own governance.

**Economic structure.** It is the most demanding independent option. WFC #574 itself estimated that Kusama could not afford the security burden for a full JAM alone [12]. The JAM Implementers discussion likewise treated the inability of Kusama’s economy to support a standard-parameter independent JAM as substantially more than a remote risk [48]. Even if either estimate changes, the direction of the mismatch is clear: a full independent JAM requires a security economy far larger than KSM presently provides.

**Political consequence.** KSM DAO rejected WFC #574 overwhelmingly. Reconsideration would require materially new evidence and, in practice, a firm prior commitment from DOT DAO. Asking Kusama to finance the interim system in the dire hope that Polkadot later joins would transfer disproportionate launch risk to the smaller economy.

#### 3.4.2 Provisional assessment

A full Kusama JAM is technically coherent but **economically non-credible as a stand-alone destination**. It is relevant mainly as one possible road to cohabitation, and an unlikely one.

### 3.5 Scenario 5 — Kusama–Polkadot Cohabitation

**Definition.** Kusama and Polkadot become distinct political and economic jurisdictions on a shared JAM. They share validator security, data availability, networking and the base protocol, while maintaining separate governance, service logic, treasuries and token economies. This would allow for tighter integrations between Kusama and Polkadot than through their current bridge architecture integration.

Cohabitation has three separable design aspects.

#### 3.5.1 Analysis: JAM Launch

There are two principal launch paths, Kusama first or Polkadot first:

**Kusama first; Polkadot joins later.** Kusama launches a full-scale JAM and Polkadot eventually migrates onto it. This is the direction described in WFC #574 [12].

This path has a potentially important strategic advantage: it could allow Kusama to **resume an explicit canary role for Polkadot at the infrastructure-transition level**. Kusama could migrate first, expose JAM to production conditions, identify operational or governance failures and absorb some of the initial migration risk before Polkadot moves its substantially larger economy. If this produces material risk reduction or implementation knowledge for Polkadot, the economic burden need not necessarily fall entirely on KSM DAO. DOT DAO could in principle compensate Kusama for providing this testing function, effectively procuring a live production proving ground before committing Polkadot itself.

The strength of this argument is, however, materially weaker than it was under earlier generations of Polkadot infrastructure. The **JAM Toaster** has been built specifically to exercise JAM implementations at production scale before deployment, including a full-scale configuration of 1,023 validators and 341 cores [49]. It allows multiple implementations, networking behaviour, data availability, performance and protocol conformance to be tested under conditions designed to approximate the eventual production system. Much of the purely technical rationale for maintaining a separate live canary network has therefore largely been **superseded by purpose-built testing infrastructure**.

In addition there are other substantial disadvantages. KSM DAO rejected WFC #574; Kusama would have to operate a full-scale JAM during the interim period; and DOT DAO would eventually be asked to move its primary jurisdiction onto infrastructure initially owned, controlled and governed by KSM DAO. The incremental value of a live Kusama canary phase must therefore be weighed against both the capabilities already provided by the JAM Toaster and the considerable economic and political cost of maintaining a full-scale intermediate network.

**Polkadot first; Kusama joins later.** DOT DAO launches JAM Prime under the Polkadot transition process, after which Kusama migrates as a sovereign service jurisdiction. This is more plausible because Polkadot has already ratified the direction, conformance and transition work for JAM through Referendum #682 [45], and the emerging Parachain Service work is being developed in the Polkadot SDK [41][42][43][44].

Either path must address a common base resource for footprint. A shared JAM cannot easily maintain incompatible definitions of the same validator-held footprint. JAMKB or a functionally equivalent entitlement could provide the shared resource layer, while KSM and DOT continue to govern local fees, applications and internal allocation [39][40].

#### 3.5.2 Analysis: Burden Sharing of the Staking Economy

With this design aspect, both economies contribute continuously to the security of the joint JAM. This could involve multi-token staking, multi-token validator subsidies, proportional core payments or any hybrid combination.

**Technical structure.** Both jurisdictions receive the security of the full validator set they each proportionally contribute to. Their service and core-allocation economies can technically remain separate; service-owned cores could be allocated or sold internally in DOT or KSM [37].

**Economic structure.** The main difficulty is allocating a public-good cost. Should Kusama’s share depend on reserved cores, actual compute, footprint, market capitalisation, stake, traffic, risk or some combination? Token prices and usage change continuously, so any formula creates redistribution and renegotiation pressure.

**Political consequence.** Every security-budget cycle becomes a bilateral governance question. Either community may believe it is subsidizing the other. Multi-token staking also raises questions of collateral valuation, slashing, validator election and relative monetary issuance. WFC #574’s rejection demonstrates that a vaguely specified shared-cost model lacks legitimacy, even if sharing the burden of providing security is technically possible [12]. Earlier implementer discussion similarly identified fair economic disposition and improved individual prospects for both founding economies as necessary conditions for a shared JAM [50].

**Provisional assessment.** Burden sharing may be appropriate for a possible future federated multi-economy JAM, but it is probably **too institutionally complex as Kusama’s first settlement**.

#### 3.5.3 Analysis: Wholesale Security-and-Resource Endowment

In this variant, JAM Prime’s validator security is provisioned exclusively by the DOT staking economy. KSM DAO receives or purchases a durable, defined subset of JAM Prime resources together with the privileges required to govern those resources internally.

**Technical structure.** Kusama operates as a service jurisdiction on JAM Prime rather than maintaining a separate validator substrate. A wholesale package would need to include, at minimum:

- a guaranteed compute-capacity floor;
- sufficient footprint entitlement;
- dedicated core-assignment rights for Kusama system parachains;
- KSM-controlled authorization over the relevant cores, allowing capacity to be allocated or sold internally under KSM-denominated rules; and
- safeguards protecting Kusama’s privileges against unilateral reduction or reassignment by DOT DAO governance.
- always-accumulate capacity for Kusama bookkeeping, including accumulation when no Work Report is incoming. This is a distinct resource requirement for which no standard market model currently exists.

These rights would be exercised through KSM DAO-governed JAM services and would need to survive ordinary manager-service upgrades and succession.

**Economic structure.** Kusama would not pay a recurring share of the entire JAM Prime validator system. Instead, KSM DAO would receive or purchase a defined security-and-resource package for an agreed term or under durable conditions.

A preliminary marginal-cost illustration can be constructed from the working assumptions used in this paper:

- $5,000 per JAM Prime validator-equivalent per month;
- three validator-equivalents to provision one core;
- therefore $15,000 per core per month, or $180,000 per core-year;
- seven continuous cores for the current four Kusama system or common-good parachains (removing the need for the Kusama coretime parachain); and
- therefore **$1.26 million per year** for the illustrative seven-core security allocation.

This is not a market price for JAM coretime and not an estimate of Kusama’s complete operating budget. It excludes footprint, development, migration, secondary infrastructure, maintenance and contingency capacity, and any opportunity-cost premium charged by DOT DAO. Future optimizations like multiple parachains per core or longer parachain slot durations could reduce coretime cost even more. The seven-core floor is also a working hypothesis that must be measured and currently excludes capacity required by other commercial Kusama parachains. These parachains would need to secure their respective compute capacity requirements on JAM Prime’s coretime market in this scenario.

The significance of the estimate is comparative. Even after additional costs are included, a defined subset of JAM Prime may be an order of magnitude more compatible with Kusama’s economy than financing hundreds of independent validators.

**Political consequence.** The arrangement would replace recurring burden-sharing negotiations with a bilateral settlement over a defined package of resources, privileges, duration, safeguards and obligations. KSM DAO could retain control over KSM monetary policy, its treasury, service governance and the internal allocation of Kusama’s capacity, while DOT DAO would remain responsible for the shared validator substrate and base protocol.

This creates a cleaner institutional boundary than proportional burden sharing, but only if Kusama’s rights are sufficiently durable. Without protection against unilateral amendment, the arrangement would amount to revocable infrastructure access rather than meaningful service sovereignty. The central political question is therefore:

> **Can KSM DAO and DOT DAO agree on a fair, durable and sufficiently sovereign security-and-resource endowment for Kusama on JAM Prime?**
> 

#### 3.5.4 Provisional assessment

A wholesale security-and-resource endowment is the **strongest cohabitation hypothesis**. It could remove Kusama’s duplicated base-layer security burden while preserving a separate KSM DAO governed jurisdiction, but it warrants further technical, economic and constitutional study before either DAO considers migration or financing.

## 4. Assessment of Objectives

### 4.1 Objectives

The scenarios should be assessed against six **partly incommensurable objectives**. They involve real trade-offs between sovereignty, security, cost, feasibility and political legitimacy. The comparison therefore does not identify a single **best** scenario, but makes those trade-offs explicit.

1. **Mission, values and culture:** Kusama should remain an experiment-centric, cypherpunk jurisdiction able to pursue higher-risk technical, economic, artistic and social programmes, regardless of its chosen infrastructure. 
2. **Technical feasibility and transition complexity:** the scenario must be credibly implementable, and the distance between a conceptual model and a launchable system matters. 
3. **Sovereignty:** KSM DAO should retain meaningful control over KSM monetary policy, the treasury, Kusama service logic, internal resource allocation and application policy; dependencies on another governance system must be explicit, limited and paired with continuity safeguards and contingencies.
4. **Security and resilience:** the scenario must provide adequate economic security, validator and operator diversity, data availability, implementation diversity, fault isolation and incident recovery; validator count alone is insufficient.
5. **Economic sustainability:** the recurring real cost of the architecture must be proportionate to Kusama’s economy and expected demand, while minimising issuance whose primary purpose is financing unused or duplicated base infrastructure.
6. **Political feasibility and legitimacy:** the scenario must be capable of obtaining informed consent from the communities whose rights, assets or infrastructure are affected; existing governance decisions must be respected, and any change in direction must be based on new public evidence rather than informal prior agreement.

### **4.2 Provisional Comparison**

| Scenario | Mission and culture | Technical feasibility | Sovereignty | Security and resilience | Economic sustainability | Political feasibility |
| --- | --- | --- | --- | --- | --- | --- |
| **1. Status quo** | **Mixed:** preserves present identity but delays the JAM-era mission | **Strong near term; weak long term** | **Strong formal control** | **Mixed:** large set, but increasingly difficult to fund | **Weak** | **Strong as a time-limited scenario** |
| **2. Economy M&A** | **Weak:** especially if DOT absorbs KSM | **Medium** | **Weak for the acquired economy** | **Strong under the surviving economy** | **Potentially strong, but achieved through consolidation** | **Very weak** |
| **3. Lightweight / Low-Latency JAM** | **Very strong:** adds strategic differentiation | **Uncertain to medium:** specification support exists; implementation and benchmarking remain | **Strong** | **Uncertain to medium** | **Uncertain to medium** | **Strong within KSM DAO because of WFC #573** |
| **4. Full Kusama JAM** | **Strong** | **Medium** | **Strong** | **Strong if adequately funded** | **Very weak** | **Very weak after WFC #574** |
| **5A. Cohabitation with burden sharing** | **Strong** | **Medium** | **Medium at base layer; strong at service layer if designed well** | **Strong shared security; correlated base risk** | **Mixed** | **Weak to uncertain** |
| **5B. Cohabitation with wholesale endowment** | **Strong** | **Medium** | **Potentially strong jurisdictionally with proper safeguards** | **Strong shared security; correlated base risk** | **Potentially strong if fairly priced** | **Unknown; requires KSM DAO and DOT DAO** |

The ratings should be read as a **trade-off map, not a ranking**. Different scenarios optimize different objectives, and the final balance between them is ultimately a political judgement for KSM DAO.

## 5. Provisional Conclusion

Kusama’s central JAM-era question is not whether it should preserve every element of its present infrastructure. It is **which infrastructure arrangement can sustainably preserve Kusama as a distinct political, economic and experimental cypherpunk jurisdiction**.

Under the relay-chain model, political sovereignty, economic sovereignty and infrastructure sovereignty largely coincided. JAM weakens that equivalence. A service jurisdiction may govern its own monetary system, treasury, service logic and internal resource allocation without necessarily financing and controlling the validator substrate beneath it. This creates a broader design space, but it does not make infrastructure dependence irrelevant. The relevant question is which powers KSM DAO must retain directly, which security functions it can accept from another system, and what technical and political safeguards are required for that dependence to remain acceptable.

The economic evidence makes continued reconsideration unavoidable. The 700-validator stress test is illustrative rather than definitive, but it exposes a structural mismatch between the potential real cost of Kusama’s security apparatus and the economic scale of the network. More precise benchmarking may change the figures, but it is unlikely to remove the underlying need to resize, share, procure or otherwise reform the security burden. Formal independence is not economically meaningful if it can be maintained only through excessive dilution, under-remunerated operators, concentration or recurring external subsidy.

The five scenarios therefore do not carry equal weight.

1. The **status quo** remains a reasonable bridge scenario while validator resizing, JAM development and migration research continue. It is a weak long-term destination because it leaves Kusama dependent on a relay-chain architecture that Polkadot intends to replace and effectively abandon and would thus require a separate long-term maintenance constituency.
2. An **economic merger or acquisition** would remove the duplicated security burden, but only by ending one of the two independent token economies. It is useful as a boundary case rather than as a preferred future, unless KSM DAO first concludes that preserving KSM and Kusama’s separate constitutional identity is no longer an objective.
3. An **independent lightweight Kusama JAM** remains the legitimate political baseline established by WFC #573 and the strongest option for preserving infrastructure sovereignty. Gray Paper support for smaller validator sets makes it more technically plausible than before, but not yet proven secure or economically sustainable. Its validator profile, implementation burden, fixed maintenance costs and required staking return must be modeled independently. Low latency should be treated as a separate design objective and, given the present status of Slipstream, should not determine Kusama’s near-term infrastructure choice.
4. A **full-scale independent Kusama JAM** is technically sound but economically non-credible as a stand-alone destination under present conditions. Without a firm prior commitment from DOT DAO to join or materially support it, Kusama would assume disproportionate launch and operating risk. The rejection of WFC #574 further means that such a path lacks a current political mandate.
5. **Kusama–Polkadot cohabitation**, particularly through a wholesale security-and-resource endowment on JAM Prime, is therefore the most important new hypothesis to study. It could allow Kusama to retain KSM, its governance, its treasury, service-level constitutional authority and its cypherpunk mission while avoiding the recurring cost of a separate validator substrate. A defined package of compute, footprint and allocation privileges may also create a cleaner and more durable settlement than recurring burden sharing between two token economies.

This is not yet evidence that cohabitation is superior. Kusama would acquire material dependencies on JAM Prime, its base protocol, validator system, privileged services and DOT DAO governance. Its effective sovereignty would depend on the quality and durability of the rights it receives: control over core assignment and authorization, sufficient footprint, protection of constitutional services, constraints on unilateral amendment, migration support and a credible portability path. Without these protections, cohabitation could become infrastructure dependence without meaningful jurisdictional autonomy.

The provisional strategic direction should therefore be **dual-track**:

1. retain and properly assess feasibility of an independent lightweight JAM as Kusama’s baseline and credible fallback; and
2. investigate whether a sufficiently sovereign, secure and economically superior cohabitation package can be constructed on JAM Prime.

No financing decision should precede that work. The KSM treasury, extraordinary issuance, a DOT DAO grant, the 10 million DOT commitment, or a blended structure are possible financing instruments; none defines the architecture or establishes what the arrangement is worth. The required resources, privileges, obligations and contingencies must be specified first, followed by valuation, political negotiation and only then a funding proposal.

WFC #573 should therefore remain in force unless KSM DAO later approves a demonstrably stronger arrangement. The next governance step could be a comparative study and non-binding discussion capable of producing an implementable architecture and, in the cohabitation case, a draft bilateral term sheet.

The final decision test is:

> **Would a proposed cohabitation arrangement allow Kusama to fulfil its mission with stronger sustainable security, lower long-term economic burden and sufficiently meaningful KSM DAO control than the best affordable independent lightweight JAM?**
> 

If the answer is no, Kusama should pursue the best defensible independent configuration. If the answer is yes, sharing JAM Prime may preserve more of Kusama’s effective sovereignty than maintaining an independent infrastructure burden that its economy cannot sustainably support.

## 6. Second-Order Consequences

If cohabitation proves technically, economically and politically viable, its significance would extend beyond resolving Kusama’s immediate infrastructure problem. At least three broader consequences follow from the model explored above.

### 6.1 Reopening KSM’s Monetary Design

A first consequence is that cohabitation could **reopen KSM’s monetary design almost from first principles**.

If KSM no longer needs to finance an independent base-layer security budget, a major structural reason for continuing monetary issuance disappears. KSM DAO could choose to reduce base issuance toward zero and, where protocol revenues are burned, potentially move KSM toward a predictably scarce or even net-deflationary asset. Prior Kusama governance discussion has already explored burn-based monetary policy as an alternative to a hard cap [51].

This would not follow automatically. Kusama would still need to finance its services, development, off-protocol infrastructure and future resource requirements. But the policy space would change fundamentally. Rather than issuing KSM indefinitely to maintain a duplicated validator infrastructure, KSM DAO could establish a **predetermined monetary and resource runway**: securing several years of JAM Prime resources in advance while defining the permitted issuance path over that period.

Kusama would then have a defined horizon in which to pursue its renewed experimental cypherpunk mission, discover sustainable economic activity and develop sufficient protocol revenue to finance its continuing resource requirements. At the end of that runway, additional resource acquisition or renewed issuance would become an explicit governance decision rather than an automatic consequence of maintaining an independent staking economy.

### 6.2 Proof of JAM’s Multi-Economy Operation

A second consequence would be **proof that JAM can support multiple sovereign economic and political jurisdictions on one shared security substrate**.

A successful Kusama–Polkadot cohabitation would demonstrate in production that a JAM instance need not correspond to a single token economy or DAO. DOT could remain the economic foundation of the validator substrate and overall infrastructure governing body while KSM retains its own monetary policy, treasury, governance and internal resource economy. Kusama would therefore become an early proof that JAM’s separation between infrastructure, services and resource control can support genuinely distinct economies rather than merely multiple applications within one economy.

This would have implications beyond Kusama. JAM Prime could evolve from infrastructure serving a single Polkadot economy into a **multi-economy world computer**, in which other sufficiently autonomous jurisdictions could obtain security and resources while retaining separate governance and economic systems. Kusama would provide the first practical test of the constitutional, technical and economic arrangements required for such a model.

### 6.3 Tighter Kusama–Polkadot Integration

A third consequence would be **tighter technical and economic integration between Kusama and Polkadot**. Under cohabitation, both jurisdictions would operate on the same JAM substrate rather than being connected primarily through a bridge architecture.

This could reduce the architectural distance between the two ecosystems while preserving separate governance and token economies. Shared infrastructure could make cross-jurisdiction messaging, service composition and resource coordination more direct, allowing Kusama to function not only as a distinct experimental jurisdiction but also as a more deeply integrated counterpart to Polkadot.

## 7. Next Steps

The next phase should answer a limited set of decision-critical questions.

1. **What independence does Kusama’s mission actually require?**
Which experiments require control of the base consensus and validator system, and which can be conducted through KSM-governed services on a shared JAM? Is Kusama principally a base-protocol canary, an application and institutional cypherpunk jurisdiction, or both?
2. **What is the minimum secure and sustainable independent JAM?**
Which validator and active-core configurations should be evaluated? What stake-at-risk, operator diversity, implementation diversity and fault tolerance would each provide? What are their full recurring costs, including engineering, releases, audits, monitoring, incident response and returns on bonded capital?
3. **What resources would Kusama require on JAM Prime?**
What are the measured requirements for continuous and flexible compute, footprint, data availability, bandwidth, messaging, bridges, governance and other constitutional services?
4. **What constitutes a minimum sovereignty package?**
Which assignment, authorization, service-upgrade and resource-allocation privileges must remain under KSM DAO control? How would Kusama’s rights be protected against base-protocol changes, manager-service upgrades, emergency intervention or unilateral reduction by DOT DAO?
5. **Can migration be credibly demonstrated technically?**
How would Kusama’s relay-chain state, system chains and parachains migrate through the JAM Parachain Service?
6. **How do the scenarios compare over five and ten years?**
Under common assumptions, what are the total costs of the status quo, candidate lightweight JAM configurations and JAM Prime cohabitation? The comparison should include validator costs, capital returns, fixed engineering costs, migration, off-protocol infrastructure, contingencies, future capacity and governance risk.
7. **What would a fair and politically viable cohabitation settlement contain?**
Would resources be granted, purchased, endowed for a fixed term or provided durably? How should compute, footprint, privileges, migration work, opportunity cost and strategic value be priced? What value would Kusama provide to JAM Prime as an anchor tenant, cypherpunk polity and proof of multi-economy operation? What continuing obligations would remain with KSM DAO and DOT DAO, and would DOT DAO be willing to support such an arrangement through a grant, wholesale endowment, commercial sale, recurring procurement arrangement or blended model?
8. **What governance sequence provides legitimate consent?**
Which questions can KSM DAO decide independently, and which require parallel DOT DAO approval? What evidence must be published before either community is asked to approve architecture, rights, migration or financing?

The first concrete output of this **request for discussion** would be comparing a lightweight JAM security model, a Kusama-on-JAM Prime architecture, a measured resource model, a minimum sovereignty specification, migration credibility, a common economic comparison and a set of non-binding settlement options. Only after those outputs exist should either DAO be asked to choose a destination or authorize capital.

## External References

1. **Announcing the Kusama Network** — https://medium.com/kusama-network/kusama-network-7446706b8f4c
2. **Gavin Wood presents Kusama at DOTCon 0.5** — https://www.youtube.com/watch?v=VmSoHbVGo4k
3. **Kusama Network Block #1** — https://kusama.subscan.io/block/1
4. **KSM DAO WFC #498: A New Kusama Vision and 10 Million DOT from Web3 Foundation** — https://kusama.subsquare.io/referenda/498
5. **Web3 Foundation: A New Chapter for Kusama** — https://medium.com/web3foundation/a-new-chapter-for-kusama-web3-foundation-proposes-10m-dot-initiative-to-fuel-zk-innovation-and-bd63298fbd3b
6. **Kusama Vision** — https://kusama.network/vision
7. **Kusama Zero-Knowledge Initiative** — https://zk.kusama.vision/
8. **Kusama Proof of Personhood Initiative** — https://k51qzi5uqu5dk1h0t1ofq49oww8ykmcnsxl1h3m0d41pb58eog9f9yjjwxnnwh.ipns.inbrowser.link/
9. **Kusama Art & Social Experiments Initiative** — https://art.ksm.vision/
10. **JAM Gray Paper** — **Official Specification PDF, version current at publication: v0.8.0** — https://graypaper.com/graypaper.pdf
11. **KSM DAO WFC #573: Lightweight and Independent Kusama JAM** — https://kusama.subsquare.io/referenda/573
12. **KSM DAO WFC #574: Full-Power and Polkadot-Friendly Kusama JAM** — https://kusama.subsquare.io/referenda/574
13. **Kusama Referendum #655: Validator set reduction to 700** — https://kusama.subsquare.io/referenda/655
14. **Proposal discussion: Adapting Kusama to demand and its JAM future** — https://forum.polkadot.network/t/proposal-discussion-adapting-kusama-to-demand-and-its-jam-future/17141
15. **Dynamic Allocation Pool proposal** — https://forum.polkadot.network/t/proposal-dynamic-allocation-pool-dap/15878
16. **Roadmap for the Dynamic Allocation Pool** — https://forum.polkadot.network/t/the-roadmap-for-the-dynamic-allocation-pool-dap/16511
17. **CoinGecko: KSM historical market capitalization data** — https://www.coingecko.com/en/coins/kusama/historical_data
18. **Polkadot Lessons: Web3 Summit 2025 closing keynote, Day 1** — https://www.youtube.com/watch?v=PV1QP8cJh74
19. **Polkadot WFC #1710: Hard Pressure Capped & Stepped Supply Schedule** — https://polkadot.subsquare.io/referenda/1710
20. **Bitcoin: A Peer-to-Peer Electronic Cash System** — https://bitcoin.org/bitcoin.pdf
21. **Peter Todd — “Surprisingly, Tail Emission Is Not Inflationary” (Bitcoin-Dev, 9 July 2022)** — https://www.mail-archive.com/bitcoin-dev%40lists.linuxfoundation.org/msg11678.html
22. **Addressing the Diminishing Block Subsidy** — https://delvingbitcoin.org/t/addressing-the-diminishing-block-subsidy/2640
23. **EIP-8363: Tapered Issuance Burn** — https://ethereum-magicians.org/t/eip-8363-tapered-issuance-burn/29263 
24. **FAQ: Ethereum Issuance Reduction** — https://ethresear.ch/t/faq-ethereum-issuance-reduction/19675
25. **Solana SIMD-0228: Market-Based Emission Mechanism** — https://github.com/solana-foundation/solana-improvement-documents/pull/228
26. **Solana SIMD-0550: Double Disinflation** — https://github.com/solana-foundation/solana-improvement-documents/pull/550
27. **The Great Celo Halvening — Temperature Check** — https://forum.celo.org/t/the-great-celo-halvening-proposed-tokenomics-in-the-era-of-celo-l2/9701
28. **Reduce Inflation for NEAR Protocol** — https://gov.near.org/t/reduce-inflation-for-near-protocol/41140
29. **Tezos Adaptive Issuance** — https://octez.tezos.com/docs/active/adaptive_issuance.html
30. **[Constitutional] AIP: Minimize Arbitrum Nova** — https://forum.arbitrum.foundation/t/constitutional-aip-minimize-arbitrum-nova/30880
31. **Validator remuneration and quality-of-service discussion** — https://forum.polkadot.network/t/warning-to-all-kusama-nominators/18078/15
32. **Gray Paper PR #514: Support smaller validator sets** — https://github.com/gavofyork/graypaper/pull/514
33. **JAM Gray Paper release v0.8.0** — https://github.com/gavofyork/graypaper/releases/tag/v0.8.0
34. **Security considerations and feasibility of smaller JAM instances** — https://github.com/gavofyork/graypaper/issues/516
35. **Small JAM validator sets and quantum-safety discussion** — https://github.com/gavofyork/graypaper/issues/516#issuecomment-4756719472
36. **JAM Slipstream design issue** — https://github.com/gavofyork/graypaper/issues/322
37. **JAM Implementers discussion: service-owned cores and separate DOT/KSM allocation economies** — https://matrix.to/#/!wBOJlzaOULZOALhaRh:polkadot.io/$lzkF0RapYbKBUKjQXNwDBL1YF_-mvxuK6A506UnB3vI?via=polkadot.io&via=matrix.org&via=parity.io
38. **JAM Gray Paper release v0.6.7: cores as property and gratis storage** — https://github.com/gavofyork/graypaper/releases/tag/v0.6.7
39. **DOT DAO and the need for JAMKB** — https://medium.com/polkadot-network/dot-dao-and-the-need-for-jamkb-a069e72e9728
40. **DOT DAOism under JAM: An Island Story** — https://medium.com/polkadot-network/dot-daoism-under-jam-an-island-story-efe0d02ee084
41. **Polkadot SDK PR #11883: JAM Parachain Service design** — https://github.com/paritytech/polkadot-sdk/pull/11883
42. **Polkadot SDK PR #12714: Cumulus on JAM scope of work** — https://github.com/paritytech/polkadot-sdk/pull/12714
43. **Polkadot SDK PR #12809: Speculative messaging on JAM** — https://github.com/paritytech/polkadot-sdk/pull/12809
44. **Proof of Concept Parachain Service** — https://github.com/paritytech/parachain-service
45. **Polkadot Referendum #682: JAM ratification, conformance and performance** — https://polkadot.subsquare.io/referenda/682
46. **JAM Implementers discussion: 32-core, one-second Kusama configuration** — https://matrix.to/#/!wBOJlzaOULZOALhaRh:polkadot.io/$Tln31n68BTM4B8Y6AUWDswwWBlag0UPW7Rib9SGdILU?via=polkadot.io&via=matrix.org&via=parity.io
47. **JAM & DOT DAOism | Keynote & Fireside w/ Erin | Friday 19th June 2026** — https://www.youtube.com/watch?v=sr8D1gptJB8
48. **JAM Implementers discussion: sustainability of an independent standard Kusama JAM** — https://matrix.to/#/!wBOJlzaOULZOALhaRh:polkadot.io/$vYAz3E3p5WevlC4K1i8fCt9yL7LsjURCqncEstVO90s?via=polkadot.io&via=matrix.org&via=parity.io
49. **The JAM Toaster** — https://www.youtube.com/watch?v=YZP3kJKfqSw
50. **JAM Implementers discussion: fairness and improved prospects in a multi-economy JAM** — https://matrix.to/#/!wBOJlzaOULZOALhaRh:polkadot.io/$ZarNZvHEGjrAMcBOBAnzakLHWHNG6OnM3fGZiqk63QQ?via=polkadot.io&via=matrix.org&via=parity.io
51. **Kusama burn-based tokenomics discussion** — https://forum.polkadot.network/t/wfc-burn-based-tokenomics-for-kusama-the-ethereum-model-not-a-hard-cap/16540
