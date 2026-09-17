---
id: proposal-kusama-future-jam-prime
slug: proposal-kusama-future-jam-prime
title: A Proposal for a Kusama Future on JAM Prime
summary: A position paper proposing a finite, protected Kusama resource endowment on JAM Prime and a funded programme for Kusama’s next era.
authors:
  - Emiel Sebastiaan
  - Arief Ernst
published: 2026-09-17
updated: 2026-09-17
tags:
  - kusama
  - polkadot
  - jam
  - governance
  - tokenomics
status: published
publicationType: position-paper
edition: 0.1.0
license: CC-BY-4.0
---
# A Proposal for a Kusama Future on JAM Prime

**A position paper proposing a finite, protected Kusama resource endowment on JAM Prime and a funded programme for Kusama’s next era.**

*17 September 2026 by Emiel Sebastiaan and Arief Ernst on behalf of [SDFI BV](https://sdf.institute).*

**Status and purpose.** This paper follows *Kusama Futures in the JAM Era*. It proposes a negotiating direction for community discussion, supported by the technical requirements in Appendix A, the economic analysis in Appendix B and a template Wish for Change resolution in Appendix C. Appendix D records community feedback. Funding, implementation and migration require separate approvals from the relevant governance bodies and resource owners.

**Appendix A | technical feasibility.** Appendix A is directed primarily to the **Polkadot Fellowship and JAM implementers** for expert critical assessment of the proposed transition architecture, resource assumptions and sovereignty mechanisms.

**Appendix B | economic feasibility.** Appendix B is directed primarily to **Web3 Foundation** to inform its decisions on **Vision Fund allocations**, with **its economists** invited to critically assess the cost benchmark, financing assumptions and economic case.

**Disclosures and acknowledgements.** The authors write from informed positions. Primary author leads a JAM Implementation project, and his engineering team was the first to fully complete Milestone 1 of the JAM Prize. Additionally, the primary author has business interests in staking operations, in ventures seeking to research and utilise JAM infrastructure, and has economic exposure to both ecosystems. Views expressed are authors’ own and do not represent other JAM implementers or related organisations. Any mandate to pursue or implement the scenarios discussed ultimately rests with KSM DAO and, where Polkadot resources or commitments are involved, potentially with DOT DAO. AI tools were used to assist with research, drafting and editing; the authors take full responsibility and ownership for the arguments, suggestions and conclusions presented. Thanks are due to fellow JAM implementers who provided technical review; such review does not imply endorsement of the paper’s suggestions and conclusions. The authors remain committed to moderating the discussion that follows.

## Abstract

Kusama’s next infrastructure decision will shape what its community can build, how it governs that work and which obligations it must finance. Preserving existing functions, retaining meaningful self-government and developing a distinctive offering must fit within the same resource constraints.

**We propose negotiating 16 total cores for 5 years on JAM Prime, with 450,000 JAMKB-equivalent of footprint, protected KSM control and Fellowship-led migration and maintenance, using US$8.64 million as the complete-package negotiating reference and settling in DOT.**

The proposal combines a finite infrastructure commitment with a renewed vision programme for Kusama’s next era on JAM. Its terms must leave that programme funded. The quantities are planning allocations, the price is a negotiating reference, and the required sovereignty boundary remains to be implemented and verified.

## 1. From the Scenario Analysis to a Transition Hypothesis

### 1.1 The transition hypothesis

The *Scenario Analysis* compared independent operation, economic consolidation and cohabitation. It introduced an endowment as a way to retain a distinct KSM-governed domain while sharing the underlying security infrastructure. This paper develops that possibility into a resource request, vision programme direction and approval process. [1]

**JAM Prime** means the Polkadot-aligned JAM instance contemplated as the successor to Polkadot’s relay chain. **Cohabitation** means shared security infrastructure with separate governance and resource-allocation domains. A **security and resource endowment** provides specified resources and associated control rights for an agreed term for Kusama.

Kusama would adapt Polkadot’s proposed Parachain Service design as a separate **Kusama Parachain Service** referred to in this document as **host**. Kusama Asset Hub would provide KSM-governed administration, including its host upgrades; Kusama Coretime would administer parachain participation and internal allocations. Authorizer programs would enforce admission rules for work submitted to Kusama’s endowed cores. Validator selection would remain outside Kusama’s authority, at JAM Prime level. Appendix A.2 develops this architecture from the pinned Parachain Service design specification.

The migration would preserve selected functions, state and governance arrangements as far as the host transition allows. Subsequent consolidation, monetary redesign and new services would have their own specifications and approvals.

### 1.2 What the technical resource analysis establishes

The **5-chain system baseline** comprises **Asset Hub, Coretime, People, Bridge Hub and Encointer**. Appendix A retains a **7-core** allocation reference for these chains: 3 for Asset Hub and 1 for each other chain. Rounding to **8 cores** provides 1 core of allocation flexibility. A 16-core allocation leaves 9 cores beyond the 7-core reference, while a 32-core allocation leaves 25 additional cores, before any further reservations.

The wider inventory of Kusama’s permissionless parachain ecosystem currently contains **17 parachains and 41 allocated cores**. Both a 16-core and a 32-core proposal therefore remain below the current aggregate allocation and require an explicit treatment of workloads and commitments that fall outside the proposed estate. (Appendix A.3.)

The footprint request combines **250,000 JAMKB-equivalent for the 5-chain offering** with **200,000 for initial transition support for 12 other parachains**. Under Appendix A.4.1’s convention, the total represents **450,000 JAMKB-equivalent**. It covers host-side state and programs, including the specified version allowances and contingency reserves. It does not establish that all 17 chains can execute within either 16 or 32 cores. Always-accumulate resource requirements also remain unquantified. (Appendices A.4–A.5.)

### 1.3 Sovereignty as a delivery condition

The proposed **bounded operational sovereignty** gives KSM governance control over its domain while accepting shared infrastructure, consensus and security. Throughout the term, ordinary unilateral DOT-side actions must be unable to revoke, reassign or materially impair the endowed resources or Kusama’s authority over them. Changes weakening that bundle require valid KSM authorisation, except for conditions expressly agreed and encoded in advance.

Protection must cover assignment and authorisation, footprint backing, always-accumulate configuration, service upgrades, and the manager and supervisory paths capable of overriding them. Resource sufficiency and control must be verified together under one compatible implementation baseline. (Appendix A.5.)

Kusama would retain dependencies on JAM Prime’s validators, protocol evolution and systemic security. The proposal accepts those dependencies in exchange for shared infrastructure, subject to the community’s assessment of the implemented protections. The technical mandate must preserve KSM authority over its own domain.

## 2. Constraints and Strategic Choices

The endowment must fit both Kusama’s available resources and its purpose. Ten connected choices frame the proposed strategy.

**Authors’ judgements.** The ten positions below express the authors’ judgements, informed by the paper’s evidence and assumptions. Different opinions about Kusama’s purpose, priorities, acceptable risks or economic prospects would lead to different positions. Each one-line statement should be read alongside its supporting discussion and the qualifications in the appendices; the authors’ conclusions remain open to challenge and revision.

### 2.1 Establish a decision timetable

**Position 1. Kusama needs an infrastructure decision now.**

The *Scenario Analysis* identifies pressure on issuance-funded security when KSM’s purchasing power weakens against externally denominated operating costs. [1] We propose a direction-setting decision followed by a timely preparation programme. Postponement should identify the information sought, continuing expenditure and point of reconsideration. The proposed Wish for Change would establish direction. (Appendix C.)

### 2.2 Account for independent security

**Position 2. Kusama cannot afford an independent JAM.**

WFC #573 proposes an independent 32-core JAM (with 1-second blocks, which we ignore here for sake of convenience). Independence retains responsibility for validator operation, security financing and the base network. Cohabitation shifts those shared-infrastructure responsibilities into the negotiated arrangement. [2]

At the common benchmark, 32 cores represent **US$3.456 million annually** under either architecture. Actual independent-JAM costs remain unresolved. We expect independent operation to impose a substantially greater total financing and engineering burden on Kusama than the proposed smaller, shared-infrastructure package, while providing weaker economic security. This is our assessment of the additional obligations and the challenge of financing a separate security economy; Appendix B supplies neither a complete independent-JAM budget nor a quantified comparison of security. Our case rests on a smaller allocation, sharing existing infrastructure and retirement of the separate security obligation at an acceptable complete-package price. (Appendix B.4.)

### 2.3 Require a demand case for non-system parachain hosting

**Position 3. A permissionless parachain-hosting proposition is not compelling.**

A permissionless non-system parachain hosting proposition needs evidence of paying demand, utilisation and achievable receipts. The historical allocation inventory supplies none of those forecasts. We propose allocating endowed capacity to explicitly supported strategic purposes. (Appendices A.3; B.2; B.5.)

**Non-system parachain teams should plan for a change in terms.** Continued dedicated capacity would require a prepaid commitment for an agreed term that covers its allocated package cost and any additional participant-specific costs, or separately approved support for an explicit Kusama purpose. Existing access should carry no presumption of indefinite subsidised renewal. Teams unable to support either case would need to reduce their requirements or pursue another hosting arrangement. Existing obligations must receive the orderly treatment described in §5.3.

### 2.4 Define the offering before committing

**Position 4. Securing infrastructure does not give Kusama purpose.**

The community should identify whom Kusama will serve, the capabilities it intends to provide, KSM’s role in them and whether it is willing to commit scarce resources to those purposes. Before final commitment, the strategy must be specific enough to establish resource needs, dependencies, priorities and funding. Detailed application designs can develop during the term.

We use **Future Vision Fund / Programme** for a prospective revision of the existing Vision Fund Programme and its authorised funding. It could receive an explicit mandate to coordinate execution of Kusama’s chosen strategy: translate priorities into funded projects, lead requests for proposal, manage delivery dependencies and report progress. Its budget, governance and delegated responsibilities would require agreement by KSM DAO, Web3 Foundation and any other contributing parties for their respective resources and powers. This proposed mandate is developed in §4.1.

### 2.5 Fund the use of the infrastructure

**Position 5. Securing infrastructure does not fund its use.**

A protected infrastructure term and a funded future vision programme are separate commitments. The payment ceiling for the endowment must leave resources for work outside the package, existing obligations and continuity reserves. The **Future Vision Fund / Programme needs a funded delivery budget to execute the strategy**, including the people, projects and operations outside the accepted infrastructure mandate. A 5-year allocation alone establishes no 5-year programme budget. (Appendix B.5.1.)

### 2.6 Establish an executable DOT contribution

**Position 6. The endowment requires a DOT-denominated payment envelope.**

We propose DOT settlement, matching the potential Vision Programme contribution and avoiding a substantial KSM position for the counterparty. The amount requires reconciliation and authorisation. Any KSM-funded contribution needs achievable conversion proceeds and execution limits; a headline KSM treasury valuation supplies no settlement liquidity. (Appendix B.3.)

**A substantial infrastructure contribution would materially reshape the existing Vision Fund and Programme.** DOT committed to the endowment would cease to be available for new project allocations. The decision must therefore account for outstanding commitments, the existing project pipeline and the funding retained for the Future Vision Fund / Programme, with Web3 Foundation and programme operators directly involved.

### 2.7 Choose the envelope, capacity and duration together

**Position 7. Capacity and duration compete within a fixed endowment envelope.**

The size of the envelope is itself a decision. A larger infrastructure payment may obtain more capacity or time while reducing the resources retained for the Future Vision Fund / Programme. Within each candidate envelope, more cores purchase fewer years at the adopted compute benchmark vice versa. A longer term also extends maintenance and protection obligations. We are therefore considering both **how much to commit** and **how to balance capacity and duration within that commitment**, against workload requirements, delivery timing and the vision programme budget. (Appendices B.2; B.5.1.)

### 2.8 Prepare for continuation

**Position 8. A finite endowment provides a runway to establish sustainability.**

The endowment should be treated as a **finite operating runway**: a protected period in which Kusama can establish useful services, sustained ecosystem participation and a credible basis for financing what follows.

That runway should be used deliberately. Revenues, treasury policy, renewal reserves and other sources of continuing finance need to be developed before the endowment approaches expiry. Reviews should begin early enough to determine whether Kusama should renew, resize or replace the arrangement while meaningful negotiating and implementation time remains.

The objective is therefore not simply to secure 5 or 10 years of infrastructure, but to use that runway to make the next 5 or 10 years financeable. (Appendix C.9.)

### 2.9 Give KSM explicit economic functions

**Position 9. KSM needs an explicit role in Kusama’s offering.**

**KSM itself is Kusama’s greatest strategic asset.** It is the existing economic, governance and coordination instrument around which a differentiated Kusama offering can be built. Any future strategy should therefore put KSM at the centre rather than treat it merely as a legacy token attached to the infrastructure.

Retiring separate validator remuneration would open monetary design choices while retaining KSM-governed administration. Issuance, a supply cap, burns and revenue distribution remain additional decisions. Avoided issuance creates no automatic cash budget.

Programmes should explain why participants would acquire, use or retain KSM, which rights or economic functions it provides, and how activity around those functions could contribute to shared costs and the financing of Kusama’s future runway.

### 2.10 Make stakeholder consequences explicit

**Position 10. Every stakeholder group must reconsider its expectations.**

Validator income, parachain access, Vision Programme funding and KSM holder expectations all change under the proposal. Existing obligations require proper treatment. Future support should follow the offering KSM DAO chooses, with clear limits on what the community is committing to sustain. (Appendix C.6–C.7.)

## 3. The Endowment Package and Negotiating Alternatives

### 3.1 One complete commitment

We propose one agreed DOT payment envelope (also referred to as **consideration**) for the entire security-and-resource bundle, including an accepted, migration and maintenance mandate. The requested configuration is:

| Component | Proposed requirement |
| --- | --- |
| **Compute** | **[placeholder]** identified cores, under Kusama’s regime. |
| **Footprint** | **[placeholder]** JAMKB-equivalent, corresponding to **[placeholder]** footprint credits under Appendix A.4.1’s convention, backed and usable in the relevant JAM services. |
| **Accumulation** | Protected always-accumulate registration and a quantified allowance sufficient for the agreed workloads. |
| **Sovereignty** | KSM control over internal allocation, authorisation, service administration and upgrades, with enforceable administrative restrictions. |
| **Migration and maintenance** | A Fellowship-led mandate, accepted by the Fellowship and delivery teams, covering the agreed infrastructure and continuing maintenance. |
| **Duration** | **[placeholder]** years from verified operational acceptance, with the maintenance arrangement in force. |

The quantities are intentionally left open here: Section 3 defines the package structure and negotiating parameters, while Section 5 selects and recommends the preferred configuration after considering the trade-offs developed in the intervening sections.

The scope follows Appendices A, B.5.1 and C.2–C.5. Core count, duration and consideration remain negotiating parameters. Complete delivery and the sovereignty standard remain conditions of acceptance. The final agreement must identify consideration and proceeds treatment for each component, including the footprint-policy requirements examined in Appendix D.3.

### 3.2 The compute benchmark

A **coretime-year (CTY)** means 1 core allocated for 1 year. Appendix B distributes an illustrative **US$3,000 per validator-month** operating allowance across a reference configuration of **1,023 validator positions and 341 cores**. Its 3 validator-equivalents per core produce:

`3 × US$3,000 × 12 months = US$108,000 per CTY`

`Compute benchmark = total cores × years × US$108,000`

The allowance covers modelled hosting. It requires node operator validation and excludes protocol development and the return required on bonded security capital. (Appendix B.2.)

**We propose using the resulting amount as a negotiating reference for the complete package.** Inclusion of footprint, always-accumulate configuration, sovereignty enforcement, migration and maintenance within that amount requires counterparty agreement. Their prices are not separately derived by the formula.

### 3.3 Capacity–duration configurations

We compare three compute quantities: **Scenario A: 80 CTYs at US$8.64 million; Scenario B: 60 CTYs at US$6.48 million; Scenario C: 40 CTYs at US$4.32 million**. Each is distributed across four distinct total core allocations.

All table entries are durations in years. The column amounts are compute-derived negotiating references for the complete package.

| Total cores | Scenario A: 80 CTYs / US$8.64m | Scenario B: 60 CTYs / US$6.48m | Scenario C: 40 CTYs / US$4.32m |
| --- | --- | --- | --- |
| 32 | 2.5 | 1.875 | 1.25 |
| 24 | 3⅓ | 2.5 | 1⅔ |
| 16 | 5 | 3.75 | 2.5 |
| 8 | 10 | 7.5 | 5 |

Calculated from Appendix B.2’s benchmark, these comparisons assume constant capacity, no discounting and no price escalation. Every core count includes all system parachain workloads.

At 16 cores, Scenario B reduces the reference by **US$2.16 million** and shortens the term by **15 months** relative to Scenario A. Scenario C reduces it by **US$4.32 million** and halves the term. At 8 cores, Scenario C retains 5 years within a narrower execution allocation.

For comparison, all variants carry the 450,000 JAMKB-equivalent request. Equal CTYs can entail different complete-package obligations: 8 cores for 10 years extends footprint availability, maintenance and protection over twice the term of 16 cores for 5 years. Workload-specific requirements and counterparty valuation must therefore be assessed for each variant. (Appendix B.5.1.)

### 3.4 Reconcile financing and preserve the vision programme

Our proposed principal settlement source is an **authorised contribution from reconciled Vision Programme DOT resources**. WFC #498 records an original commitment of **10 million DOT from Web3 Foundation’s own treasury** for Kusama’s benefit, including possible infrastructure support. The amount available for this proposal remains to be established. [3]

`Potential Vision contribution = 10,000,000 DOT − prior expenditure − outstanding obligations − retained programme funding`

Appendix B.3’s **US$10 million** values the original allocation at an assumed US$1.00/DOT before deductions. It is an illustrative comparison, not an available budget. At that rate, a US$8.64 million settlement would leave **1.36 million DOT of the original commitment** for all prior expenditure, outstanding obligations and retained programme funding. Missing deductions cannot be assumed to be zero.

Kusama Treasury resources could support the Future Vision Fund / Programme. Their available portion also requires reconciliation. New issuance would need explicit authorisation, a defined purpose and treatment within the monetary design. (Appendices B.3; C.6.)

The final budget must connect each authorised contribution to its permitted use and availability date. It must cover the package, expenditure outside it and continuity reserves, with each obligation recorded once.

### 3.5 Settle in DOT under a fixed ceiling

Direct use of authorised Vision Programme DOT avoids a KSM conversion and transfers no substantial KSM position to DOT DAO. Acceptance of KSM as consideration has not been established. KSM Treasury resources could instead fund activities whose recipients accept KSM. (Appendix B.3.2.)

The agreement must identify the valuation date or averaging period, a fixed DOT ceiling and responsibility for price movement before settlement. A shortfall requires revised terms or further authorisation. Any KSM conversion must have achievable proceeds and execution limits.

Web3 Foundation’s authorisation of its contribution is distinct from KSM DAO and DOT DAO approval of the arrangement. All three must be secured where their respective resources and responsibilities are involved. (Appendix C.5–C.6.)

### 3.6 The DOT DAO-side case

DOT DAO would receive consideration in DOT for bounded use of its JAM Prime infrastructure. Where the capacity would otherwise remain unused, that payment could contribute to common costs. Common host code and coordinated maintenance could reduce duplicated engineering. A differentiated Kusama economy could generate additional demand for resources, potentially also supporting demand for footprint rights retained by DOT DAO. Appendix B.5.2 develops these prospective benefits through its application of the *Island Story*.

Direct settlement could also avoid Vision Programme DOT sales that would otherwise occur to fund projects. Any wider effect depends on how the proceeds are subsequently allocated, held, spent or burned by DOT DAO; no price effect is assumed. Proceeds designated for burning would be unavailable for operating or maintenance expenditure. (Appendices B.3.2 and D.3.)

In return, DOT DAO would commit compute, footprint and accumulation, accept restrictions on reassignment and fund the agreed delivery obligations. Its assessment must account for incremental costs, alternative demand and flexibility surrendered during the term. Hosting another token economy creates no automatic return: the case requires identifiable consideration, useful economic interaction and demand beyond activity merely displaced from other JAM Prime services.

A clear, differentiated Kusama mission would also give DOT DAO a firmer basis for assessing how Kusama’s offering complements Polkadot on JAM Prime. An adopted strategy, resource plan and Future Vision Fund / Programme mandate could provide assurance that the endowment supports additional capabilities and participants, rather than a subsidised replica of Polkadot’s offering. That assurance depends on the vision programme and its execution; overlap between individual applications remains possible.

Our proposal seeks a bounded contribution to common infrastructure alongside a distinctly KSM-governed offering. Its value to both parties depends on the complete terms and the activity Kusama develops.

## 4. Suggestions for Kusama’s Strategy and Vision Programme

This section is directed primarily to **KSM DAO and the Kusama community**. The programme options below are suggestions for further discussion about the offering Kusama wishes to build and finance. They also provide strategic input into the discussion on the scale, duration and structure of a potential JAM Prime endowment.

We invite **Web3 Foundation, as owner and authorising party for the Vision Fund resources it would contribute, and the current Vision Programme’s operators** to provide substantive input on existing commitments, funding constraints, experience with participating projects and realistic delivery options. That input should help shape a community-supported strategy, a feasible mandate for the Future Vision Fund / Programme, and the resource runway required to support it. [3, 4]

### 4.1 A funded mission and a Future Vision Fund / Programme

The endowment should support a focused, KSM-centred economy. Its success would be visible in useful services, sustained participation and a credible means of funding continuation. We propose concentrating development on capabilities that reinforce one another, with explicit budgets for experimentation and subsidised activity.

The existing Vision Programme’s themes (**Proof of Personhood, Zero Knowledge, and Art & Social Experiments**) provide a foundation. The **Future Vision Fund / Programme**, defined in §2.4, could receive a mandate to coordinate delivery of the strategy KSM DAO adopts. Its work would connect those themes to shared capabilities, project selection, requests for proposal, delivery milestones and public reporting. Its mandate and budget should distinguish KSM DAO’s strategic authority, Web3 Foundation’s authority over its contributions, and the responsibilities delegated to programme operators. [3, 4]

The revised funding plan must honour existing commitments, account for the infrastructure contribution and identify the resources retained for execution. Remaining authorised DOT funds and separately approved KSM Treasury support could finance complementary activities. The delivery mandate should have a defined scope and term, with funding and reporting obligations matched to the work it is expected to coordinate.

Kusama should build on common host code, Polkadot primitives, XCM interfaces, wallet standards and developer tooling where these support the offering. The migration and maintenance mandate should identify essential integrations and responsibility for continuing compatibility. Shared engineering lets the Future Vision Fund / Programme concentrate its development budget on currency properties, privacy, responsive applications and experimental institutions. (Appendices A.2; B.5.2.) [7]

The following candidates describe a vision programme design space. Each needs its own specification, resource assessment, budget and approval.

### 4.2 Use JAM’s service architecture and bridgeless connections

Cohabitation would allow Kusama to concentrate on the services its community wants to build, with the independent validator obligation retired and the agreed infrastructure responsibilities shared. The Parachain Service supplies a continuity path; JAM’s service architecture also creates room to investigate how Kusama could use this to its benefit. (Appendices A.2; A.5; B.5.) [8]

The shared platform also creates a route to **bridgeless interaction with Polkadot services on JAM Prime**. JAM’s inter-service state access and transfers provide mechanisms on which those connections could be built. Under the proposed cohabitation arrangement, those interactions would not require a bridge between two independent networks. This is an architectural opportunity, with the actual routes, permissions and interfaces still to be explored. [7, 8]

The Future Vision Fund / Programme should assess how that access could connect Kusama’s applications to Polkadot’s assets, liquidity and complementary services while retaining distinct KSM-governed policies. Shared infrastructure provides no automatic right to use another service or assurance that every integration is available. Connections to networks outside JAM Prime retain their own requirements. Kusama’s advantage would come from combining useful shared capabilities with a distinctive offering.

### 4.3 KSM’s monetary design

Retiring the separate validator obligation would permit a different monetary policy. Kusama could adopt a fixed maximum supply, zero continuing issuance and a defined allocation of revenues among operations, renewal reserves and burns. Burns could reduce supply under the adopted rules.

The resulting proposition would be a currency with explicit commitments about dilution, governance and expenditure. Its design should establish how those commitments can change and how existing obligations are treated. Payments, collateral, resource access and governance could give KSM complementary economic functions.

**Our proposed sequence begins with monetary redesign and the budget it must support.** A supply constraint cannot substitute for financing services, and the vision programme should remain viable without assuming token appreciation.

### 4.4 A cypherpunk digital economy

**Privacy-preserving KSM.** Shielded transfers and privacy-preserving ownership proofs could make KSM useful for private payments, savings and commitments. Zcash’s shielded protocols provide a technical reference for investigation. A Kusama design would need verifiable supply integrity, explicit disclosure boundaries, secure wallets and recovery arrangements. [6]

**A privacy-preserving stable currency.** A proposed **ksmUSD** could use KSM collateral to support a stable payment unit, with private transfers as a design objective. The design would require reliable prices, verifiable collateral sufficiency, liquidation, liquidity and shortfall handling. Shielded payments and confidential collateral positions have different requirements and could be developed in stages. This remains a vision programme candidate, with no established deployment or funding commitment.

**Privacy-focused smart contracts.** Proof-verified private inputs and state transitions could support subscriptions, payments, collective treasuries and private agreements. JAM services could be assessed for verification and settlement, with KSM providing fees or access commitments. Each application would need to specify confidentiality, public information, proof-generation requirements and recovery. A limited initial application family could concentrate the engineering effort.

Together, these candidates describe an cypherpunk digital economy in which KSM serves as currency, collateral and access instrument. Their common dependencies make coordinated development useful, while each retains its own security and financial requirements.

### 4.5 A participatory experimental jurisdiction

**Privacy-preserving governance.** Confidential ballots, private delegation and publicly verifiable results could support experiments in KSM-governed decision-making. A pilot must establish eligibility, prevent double counting and protect the information its rules promise to conceal. Ballot privacy, coercion resistance and accountability for shared expenditure require separate design choices.

**Personhood and private credentials.** A shared credential service could let participants demonstrate uniqueness, membership or qualification while limiting personal disclosure. Potential uses include grants, association membership and access to supported resources. Each experiment should specify issuance, challenges, recovery and the institutions behind its claims. KSM governance could determine funding and admission policy, including any bounded access deposits. [4]

**Art and social experiments.** Programmable artworks, collective commissions, community-owned institutions and experiments in distributing common funds could combine KSM commitments with credentials and new governance rules. Their outcomes should be assessed through the work produced, participation and willingness to sustain the resulting institutions. Explicit subsidised funding can support those objectives alongside revenue-generating activity.

This combination would connect Kusama’s experimental mission to reusable tools for communities. Individual projects could draw on common infrastructure and concentrate on their own experiments.

### 4.6 A responsive application hub

Kusama could investigate **12 cores for Asset Hub with a 500 ms block-production target**. The Polkadot SDK’s elastic-scaling guide documents that configuration. The engineering work described in bkchr’s *From 12s to 500ms | The long road to faster blocks* also develops **block bundling**, which can separate a parachain’s block interval from the number of cores it occupies. [5]

The allocation consequence is immediate: 12 cores for Asset Hub plus 1 each for Coretime, People, Bridge Hub and Encointer consumes **all 16 cores**. Under that configuration, no dedicated capacity remains for other parachains or bulk coretime sales. Existing commitments would need compatible treatment, reduced requirements or separately agreed resources. (Appendix A.3.)

A responsive hub could combine KSM payments, interactive applications and selected proof services. Choosing it would determine much of the estate’s initial allocation and constrain other commitments. Long-duration access agreements should therefore follow a decision about the intended offering.

### 4.7 Choose a coherent initial vision programme

We propose selecting a small combination whose participants, dependencies and costs can be understood together. Monetary design, a cypherpunk digital economy, participatory institutions and a responsive hub are connected possibilities, with different resource demands.

Appendix A sizes the parachain-hosting transition. New native JAM services require separate assessment of code, state, accumulation, governance authority and maintenance. Neither the footprint allowance nor the host’s protected privileges automatically covers arbitrary new deployments.

The Future Vision Fund / Programme should report how actual use connects to KSM functions, participant contributions and funds available for shared costs. Income retained by individual applications must be distinguished from revenues available to sustain the common infrastructure. Resources can then be redirected toward the capabilities participants use and the public purposes KSM DAO continues to fund.

## 5. Proposed Terms, Transition and Approvals

### 5.1 Why 16 cores and 5 years

**We recommend developing Scenario A’s 16-core, 5-year arrangement.** 16 cores provide allocation room beyond the retained 5-chain and 7-core baseline; a 5-year term gives JAM time to mature while providing sufficient runway for monetary redesign, application deployment, evaluation and continuation planning. [§5.2] Together, these choices accommodate our proposed vision programme scope [§4] and delivery period, while remaining open to community scrutiny. Appendix A establishes a smaller baseline planning allocation.

The final offering brief must show how that capacity would be used and how the Future Vision Fund / Programme would remain funded to deliver the chosen strategy. Scenario B at 16 cores preserves the allocation with 15 fewer months and a US$2.16 million lower reference. 8 cores for 5 years under Scenario C preserves the operating period at narrower scope. Either merits consideration where the larger commitment would leave delivery underfunded.

We would seek the full footprint, accumulation and sovereignty bundle, together with the accepted migration and maintenance mandate. A lower price for incomplete delivery would fail the proposal’s purpose. The remaining choice therefore reduces principally to two decisions: the size of the overall payment envelope, and how the resulting resource budget should be divided between core capacity and duration. That allocation should be informed by the strategy KSM DAO chooses to support and the runway required to deliver it.

### 5.2 Use the operating term to establish continuation and sustainability

**Before acceptance**, the community should establish a resource-relevant offering brief, initial priorities, a funded Future Vision Fund / Programme mandate and treatment of existing obligations. Separately authorised preparation can develop these alongside the bilateral negotiation. The protected term begins at verified operational acceptance, with the agreed maintenance arrangement in force.

**Year one** should implement the approved monetary direction, including issuance, obligations, revenue allocation and renewal provision. Initial plans for differentiated services should develop into specifications and funded work. The Future Vision Fund / Programme would coordinate work within its accepted mandate and refine the programme established before commitment.

**Years two and three** should establish use of the selected capabilities and their contribution to KSM’s economy. Reviews should distinguish application income, refundable deposits and resources available for shared costs. By the end of the third operating year, KSM DAO should choose a financed direction for renewal, extension, resizing or an alternative infrastructure arrangement.

**Years four and five** should put that continuation arrangement in place. Its scale should follow demonstrated requirements and available financing. Longer lead times require earlier decisions; a shorter endowment requires an adjusted timetable. (Appendix C.9.)

### 5.3 Accept and fund the delivery responsibilities

We propose asking DOT DAO to include a **Fellowship-led migration and infrastructure maintenance mandate for the full term**. The Fellowship must accept the role, and the delivery plan must name responsible teams, scope, budget, reporting, recovery support and continuity arrangements. (Appendix C.4.)

The intended scope includes the host adaptation, sovereignty enforcement, transition testing, migration and compatibility of the agreed system infrastructure. The Future Vision Fund / Programme’s budget must cover activities outside the accepted package.

Technical stewardship must preserve KSM authorisation over domain policy and upgrades. The maintenance commitment is a continuing obligation; acceptance must establish how it will be funded, monitored and sustained throughout the operating term.

### 5.4 Define the future non-system parachain offering and capacity transition

We propose preparing a separate plan to move towards a **16-core total allocation**, with affected teams consulted before changes are approved. The destination establishes a planning constraint. Any interim relay-chain reduction needs its own workload, performance and continuity assessment; Appendix A establishes no one-for-one JAM performance equivalence.

**The endowment should carry no standing commitment to continue a subsidised, permissionless non-system parachain offering.** Its cores would be prepaid resources with an identifiable allocation cost and competing uses within Kusama’s strategy. Teams seeking continued dedicated capacity should prepay for an agreed allocation and term on conditions that cover the corresponding share of the agreed package payment and additional participant-specific costs. Any exception would require a separately approved budget and an explicit Kusama-specific purpose.

At the adopted benchmark, **1 full core represents US$108,000 for 1 year or US$540,000 for 5 years**, before separately assessed participant-specific costs. A final access tariff would use the agreed package consideration and scope; the benchmark establishes no market-price floor. Prepayments must have defined delivery and refund terms, and amounts used to finance the initial settlement must be available for that purpose. (Appendices B.2; C.6–C.7.)

The existing market provides a different reference. SubSquare’s record for **Kusama Coretime Sale #32**, reviewed on **16 September 2026**, showed a **1 KSM floor price**, 19 renewed cores and no new purchases at the time of review. Those short-period sale terms do not price a multi-year protected allocation. [9] **We regard substantial willingness to prepay at the proposed cost-recovery scale as unlikely and retain this route for completeness, rather than as a financing assumption.** Firm participant commitments would be needed before any such receipts could support the endowment budget.

The transition plan should register existing access commitments, their duration and resource requirements, then establish treatment for each. Teams could seek fully funded access, propose an explicitly supported Kusama purpose, reduce dedicated requirements or migrate to Polkadot subject to its access terms. Existing commitments require orderly treatment before capacity is withdrawn.

KSM governance should decide how much capacity to retain for system growth, the Future Vision Fund / Programme’s priorities and reserves before making long-duration allocations to others. Additional footprint backing supplies no extra cores, and capacity outside the endowment requires a separate arrangement.

### 5.5 Assess interim validator changes separately

The Fellowship and relevant staking and operations teams should assess staged validator reductions as workload obligations decline. Their recommendation should address security, availability, operator diversity, transition risk and the remaining service commitments. 

This paper proposes no pre-migration reduced validator count target. **Fewer validator positions leave aggregate staking expenditure unchanged when issuance and reward rules remain unchanged.** Effects on operator profitability, commission rates and nominator receipts are contingent. Changes to aggregate expenditure require a separate decision. (Appendix C.7.)

### 5.6 Next steps: community discussion and explicit decisions

This paper aims to inform a **Wish for Change through which KSM DAO can choose Kusama’s strategic direction in the JAM era**. It advances the authors’ preferred arrangement and a concrete draft resolution, while inviting challenges to its assumptions, terms and proposed vision programme. Community discussion may support revised quantities, different priorities or another infrastructure direction.

**We propose a defined public discussion window before submitting the WFC**, with opening and closing dates announced alongside the forum publication. KSM and DOT holders, validators and staking participants, parachain teams, vision programme stakeholders, Web3 Foundation, the Fellowship and JAM implementers should have an opportunity to state their positions, correct assumptions, offer evidence and propose alternatives. Appendix A invites expert technical assessment; Appendix B invites economic assessment and funding input; Section 4 invites proposals for Kusama’s offering and its delivery.

The existing *Scenario Analysis* forum thread already contains contrasting views. **Appendix D provides a dated Q&A based on that feedback**, identifying contributors’ disclosed roles or stated interests and summarising their comments. The comments concern the earlier paper and should not be read as endorsements of this proposed settlement. We propose keeping substantive discussion in the public forum, with findings from any working conversations brought back into the same record. [10]

Before submission, the revised WFC should be accompanied by an updated response record identifying corrections, changes made, unresolved disagreements and remaining validation requirements. The discussion window provides an opportunity for informed participation; it establishes neither consensus nor authorisation. Those decisions remain with the relevant governance bodies and funding parties.

Appendix C provides an illustrative **Wish for Change** for the proposed arrangement. Its initial function is to establish a strategic and negotiating direction, including reconsideration of the independent direction expressed in WFC #573. It authorises no transfer, issuance, cancellation of access, validator reduction, implementation expenditure or migration. Representatives, preparatory work and any Future Vision Fund / Programme appointment or funding mandate require separate decisions. [2]

A firm bilateral proposal must return with exact resources and term, the fixed DOT ceiling, confirmed contributions, accepted delivery responsibilities, reviewed authority, maintenance and vision programme budgets, and treatment of existing participants. Material changes must be explicit. Approval is required from KSM DAO, DOT DAO and each funding party for its respective commitments. Fellowship acceptance of technical responsibilities must be recorded separately. (Appendix C.8.)

The agreement must define operational acceptance, payment protection, non-delivery remedies, recovery and expiry. Final payment requires verified resource-and-sovereignty delivery and an accepted maintenance arrangement. Preparatory expenditure charged to the package counts towards its ceiling. Resource handover, migration, payment and commencement of the term need an implementable sequence with verified conditions. (Appendix C.5.)

### 5.7 The proposition summarised

The proposed endowment would give Kusama a defined operating term, protected authority and shared infrastructure on which to develop its next offering. It also requires choices about existing commitments, vision programme funding and the future role of KSM.

We propose 16 cores and 5 years as the negotiating starting point, conditional on complete delivery and a funded vision programme. The community’s work during that term would determine the scale and financing of what follows.

**Five years to build a Kusama worth renewing.**

## References and basis

**Appendix references.** Appendix A provides the technical basis and transition assumptions; Appendix B provides the economic benchmark, financing assumptions and counterparty analysis; Appendix C provides the illustrative WFC; Appendix D records forum feedback and the authors’ responses. References such as “C.5” identify numbered clauses of that resolution. The appendices retain their own source lists.

**[1] [Emiel Sebastiaan and Arief Ernst](https://github.com/sdfinst/publications/blob/dece1d9091bb35c93727e40f9abfcad6bf555f6c/content/articles/kusama-futures-jam-era/index.md).** *Kusama Futures in the JAM Era: Five Structural Futures for KSM DAO*. Fixed publication dated 24 August 2026, commit `dece1d9091bb35c93727e40f9abfcad6bf555f6c`. Basis for the scenario comparison and the cohabitation/endowment distinction.

**[2] [Kusama OpenGov, WFC #573](https://kusama.subsquare.io/referenda/573).** *Kusama JAM Upgrade: Option A — Lightweight and independent*. Reference for the independent 32-core, 1-second configuration. Appendix B.4’s normalised comparison leaves its actual implementation costs and performance unresolved.

**[3] [Kusama OpenGov, WFC #498](https://kusama.subsquare.io/referenda/498).** *A New Kusama Vision — 10 Million DOT from W3F & Transition Away From Being A Canary Network*. Basis for the original Web3 Foundation commitment and contemplated infrastructure support. Available funds and authorisation for repurposing require reconciliation and approval.

**[4] [Kusama Network](https://kusama.network/vision).** *Kusama Vision Program*. Programme themes: Proof of Personhood, Zero Knowledge Proofs, and Art & Social Experiments.

**[5] [Polkadot SDK documentation](https://docs.polkadot.com/polkadot-protocol/architecture/polkadot-chain/elastic-scaling/) and [bkchr](https://blog.kchr.de/from-12s-to-500ms-the-long-road-to-faster-blocks/).** *Enable elastic scaling for a parachain*, especially “Ultra low latency” and “Current limitations”; bkchr, *From 12s to 500ms — The long road to faster blocks*; and the associated [*Two Fast To Block* tracking issue #6495](https://github.com/paritytech/polkadot-sdk/issues/6495). Reviewed 16 September 2026. The guide supplies the 12-core example; the engineering account explains block bundling and the distinction between block interval and allocated resources. The tracking issue was closed when reviewed. These references establish no validated Kusama JAM configuration or finality target.

**[6] [Zcash Improvement Proposals, ZIP 224](https://zips.z.cash/zip-0224).** *Orchard Shielded Protocol*. Technical reference for shielded-currency investigation. The KSM and ksmUSD candidates require their own specifications and assessments.

**[7] [Polkadot SDK documentation](https://wiki.polkadot.com/learn/learn-xcm/).** *Cross-Consensus Message format*. Reference for shared messaging interfaces. Access and compatibility for the proposed Kusama domain require implementation and maintenance arrangements.

**[8] [Polkadot Wiki](https://wiki.polkadot.com/learn/learn-jam-chain/).** *JAM Chain*, especially “Smart Contract Similarity” and “Service Entry Points,” reviewed 16 September 2026. Reference for services, inter-service state access and transfers. The proposed bridgeless Kusama–Polkadot interaction in §4.2 is an architectural inference conditional on cohabitation and compatible service interfaces; this reference supplies no completed integration.

**[9] [SubSquare](https://kusama.subsquare.io/coretime).** *Kusama Coretime Sale #32*, reviewed 16 September 2026. The displayed record showed a 1 KSM floor price, 19 renewals, 0 new purchases and approximately 23.33 KSM of renewal revenue. These are dated sale observations, not evidence of demand for the proposed multi-year package. No live KSM/USD conversion or extrapolated revenue forecast is used.

**[10] [Polkadot Forum](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482).** *Kusama Futures in the JAM Era*. Public discussion reviewed 16 September 2026 through post #15. Appendix D links the individual comments, records their scope and provides the authors’ responses.

**Basis of the proposals.** Technical quantities and dated observations retain the assumptions in Appendices A and B. The US$108,000-per-CTY comparison is constant and undiscounted. Package terms, the Future Vision Fund / Programme mandate, programme choices and transition measures are proposals advanced in this paper. Expectations about independent-JAM costs and economic security, participant prepayment and strategic differentiation are the authors’ judgements; they are not quantified findings of the appendices. The sources establish no verified all-in quotation, quantified Kusama accumulation allowance, available uncommitted funding total or counterparty acceptance. Appendix D uses a forum review dated 16 September 2026 and separately checked DOT-side referendum records. Other source-review dates and underlying inputs are retained from the supplied draft without a new independent verification in this revision.

## Appendix A: Technical basis and transition path assumptions

*Kusama’s resource and sovereignty requirements on JAM Prime*

This appendix is directed primarily to the **Polkadot Fellowship and JAM implementers** for expert critical assessment of the proposed transition architecture, resource assumptions and sovereignty mechanisms.

### A.1 Introduction

This appendix examines how Kusama could continue as a distinct KSM-governed domain on **JAM Prime**, the Polkadot-aligned JAM instance contemplated as the successor to Polkadot’s relay chain. **Cohabitation** means sharing that security substrate while retaining separate governance and resource-allocation domains. A **security and resource endowment** provides defined resources and associated control rights for an agreed term.

The *Scenario Analysis* introduced cohabitation and distinguished recurring security procurement from a bounded endowment. [A1] The transition hypothesis developed here combines a separate Kusama instance of Polkadot’s proposed Parachain Service with protected resources and KSM-controlled administration. [A2]

Three research questions organise the assessment:

1. **How could Kusama transition to JAM Prime?** 
2. **What resources would Kusama require?** 
3. **How could KSM DAO retain sufficient authority over those resources and privileges?**

The following sections establish the architecture, compute and footprint planning references, and sovereignty-assurance requirements. Implementation compatibility, measured performance and enforceability remain to be demonstrated. Costs, financing and counterparty considerations are addressed in Appendix B.

### A.2 Proposed transition to JAM Prime

#### A.2.1 Reuse Polkadot’s Parachain Service design

The technical starting point is **Polkadot SDK PR #11883**, pinned to commit `c4d05e284ae962764afcd1f98599352e1a4e0a94`, dated **8 September 2026**. Kusama would adapt the common host implementation as a separate Kusama Parachain Service. Differences would concentrate on configuration, privileges, resource limits and governance boundaries. [A2]

#### A.2.2 Minimum functional components

| Component | Proposed responsibility |
| --- | --- |
| **Kusama Parachain Service
(referred to as: Host)** | Host the selected parachains and execute authorised host-level operations. |
| **Kusama Asset Hub** | Provide KSM-governed administration, including authority over host-service upgrades. |
| **Kusama Coretime** | Administer parachain participation, internal allocations and authorizer-queue policy. |
| **Authorizer programs** | Enforce admission rules for work submitted to Kusama’s cores. |

Asset Hub and Coretime are hosted parachains. Authorizers are programs; their use does not itself require separate JAM service accounts. These components supply the administrative architecture; A.3 defines the wider continuation baseline. [A2]

#### A.2.3 A bounded and usable resource endowment

The endowment must combine **identified execution cores, effective footprint backing and adequate accumulation capacity** throughout its term. All system and other workloads must fit within the total core allocation. The footprint must cover the agreed state, code retention and upgrade provisions in the relevant service accounts. Always-accumulate registration must support essential host processing, including control updates when no new parachain candidate is available. [A2]

#### A.2.4 Minimum sovereignty assurances

The Kusama Parachain Service would hold the **assign privilege for the endowed cores**, applying instructions from Kusama Coretime. KSM governance would control internal allocations, authorisation policy and service administration within that boundary.

The adaptation excludes **designate**, leaving validator selection at JAM Prime level, and **registrar**, leaving protected service-ID allocation to the shared arrangement. Kusama would still administer parachain registration inside its own host, within its available core allocation. Manager and supervisory restrictions must protect these domain-level powers, as developed in A.5. [A2]

#### A.2.5 Bounded and realistic continuation of the relay-chain era offering

The working migration assumption preserves selected functions, state and governance arrangements as far as the host transition allows. Carrying the 5 system chains together limits the redesign and dependency changes required before migration. Later consolidation, efficiency improvements or redesign can follow separately after migration.

This approach still requires runtime adaptations, testing and an agreed treatment of existing commitments, including those to non-system parachains.

### A.3 Analysis of compute resource requirements

#### A.3.1 Accounting for compute

A **core** is a unit of shared execution capacity. **Coretime** is access to that capacity for a specified period. A **parachain** is a hosted blockchain whose validation uses that capacity; one parachain can use several cores. Core counts therefore measure execution allocation, while parachain counts identify hosted systems. [A2]

#### A.3.2 Political reference: 32 cores

WFC #573 specifies an independent lightweight JAM with **32 cores and 1-second blocks**. Its core count supplies a reference for the scale of compute resources under consideration. [A3]

#### A.3.3 Service-continuation reference: 17 parachains and 41 cores

The inventory retained on **7 September 2026** records the following allocations. Its underlying data was dated **6 September 2026 at 05:17 UTC**, with a warning that the core map might be stale. These are dated allocations, rather than measured utilisation or validated JAM requirements. [A4]

| Workload | Parachains | Allocated cores |
| --- | --- | --- |
| Asset Hub | 1 | 3 |
| Coretime | 1 | 1 |
| People | 1 | 1 |
| Bridge Hub | 1 | 1 |
| Encointer | 1 | 1 |
| Other non-system parachains | 12 | 34 |
| **Total** | **17** | **41** |

For this appendix, **system parachains** means Asset Hub, Coretime, People, Bridge Hub and Encointer. The remaining 12 chains are treated separately.

A prospective 32-core allocation for Kusama on JAM Prime is 9 cores below this inventory. Therefore, any allocation below the 41-core reference requires an explicit account of workload changes, participating chains, service levels and separately obtained capacity. A one-for-one mapping from relay-chain allocations for parachains to equivalent JAM performance does not seem feasible.

#### A.3.4 Minimum realistic continuation reference: 5 parachains and 7 cores

This appendix takes the **5 system chains together** as its minimum continuation scope. Retaining Asset Hub’s 3-core allocation and 1 core for each other chain gives **7 cores**. This preserves the selected system functions as a planning baseline. [A4]

#### A.3.5 Rounded planning allocation

Rounding 7 to **8 total cores** provides 1 core of allocation flexibility. With the same baseline, **16 cores leave 9**, **24 leave 17**, and **32 leave 25** before further reservations. These quantities may support additional workloads (e.g. permissionless parachains), increased system-chain capacity or an execution reserve.

Accordingly, **8 cores is a rounded baseline planning allocation**. A larger endowment follows from the additional offering Kusama intends to support. Every configuration requires matching footprint and always-accumulate capacity; neither the core count nor the footprint allowance alone determines how many parachains can operate.

### A.4 Analysis of footprint resource requirements

#### A.4.1 Accounting for footprint

This model covers **host-side coherent state and programs**. **Bytes** measure encoded size; **footprint credits** denote the balance units needed under the reference accounting. [A2, §6.1]

**JAMKB** is the proposed footprint token. This appendix retains the decimal planning convention **1 JAMKB-equivalent = 1,000 footprint credits**. Final denomination and backing mechanisms remain to be established. [A5]

#### A.4.2 5-chain migration arrangement

The retained model covers the 5 system chains, a shared host and 2 reusable authorizer-program blobs. Each endowed chain receives allowances for **1 active and 2 additional solicited Parachain Validation Function (PVF) versions**. The shared host program receives the same 3-version provision, counted once. [A2, A6–A8]

| Component | Accounting basis | Modelled credits |
| --- | --- | --- |
| Global Parachain Service state | Full reference reservation | 1,433,307 |
| Generic parachain state | 5 × 69,831 | 349,155 |
| Active Parachain Service program | 1 × 300,000 | 300,000 |
| Additional solicited Parachain Service program versions | 2 × 300,000 | 600,000 |
| Active PVF programs | 5 × 15,000,000 | 75,000,000 |
| Additional solicited PVF versions | 5 × 2 × 15,000,000 | 150,000,000 |
| Authorizer programs | 2 × 200,000 | 400,000 |
| **5-chain component subtotal** |  | **228,082,462** |

The subtotal is **228,083 JAMKB-equivalent, rounded up**. The global reservation retains the Polkadot Parachain Service design’s reference assumptions of 341 cores, 1,023 validator entries and 1,000 incoming transfers. No reduction for Kusama’s narrower privileges or allocation is assumed. [A2]

Program sizes and 3-version retention are planning allowances. The service-program estimate is provisional; the PVF allowance uses a Westend reference build rather than measurements of all intended Kusama runtimes. Additional authorizer programs or its versioning may require more backing. The separate contingency reserve below allows for account-level charges, host-program accounting overhead and sizing uncertainty. [A6–A8]

#### A.4.3 Why core count is not the principal footprint driver

Footprint requirements principally follow **registered parachains, retained program versions and admitted state**. More cores assigned to an existing chain do not require another copy of each PVF. Per-core bookkeeping exists, but this model already reserves the full reference amount. Consequently, the same 5-chain configuration retains its footprint allowance across different core allocations, provided its state and code assumptions remain unchanged. [A2]

#### A.4.4 User-funded participation outside the endowed offering

The reference design tracks each parachain’s `total_state_balance` and `used_state_balance`. Kusama Coretime could use these controls to admit additional participants whose deposits supply the actual backing for their code, state and upgrades. [A2, §§6.1–6.2]

An internal quota or KSM deposit must be connected to effective backing in the relevant JAM service accounts. Registration, growth and refunds must preserve that backing without allocating it twice. This permits participation outside the endowed footprint where users provide and maintain the necessary resources. **Participation remains constrained by the cores available to Kusama under the endowment; funding additional footprint does not expand that compute allocation.**

#### A.4.5 Transition allowance for 12 other parachains

An initial allowance for the 12 other chains can provide **1 PVF version and generic host-side state per chain**:

`12 × (15,000,000 + 69,831) = 180,837,972 credits`

Adding this to the 5-chain subtotal gives **408,920,434 credits**, or **408,921 JAMKB-equivalent rounded up**.

These 12 chains would need additional backing before overlapping upgrades or state growth exceed their quotas. Releasing transitional support requires replacement backing or removal of the dependent state. **This footprint provision supplies no additional coretime and does not establish that all 17 chains fit the selected compute allocation.**

#### A.4.6 Rounded footprint planning allocations

| Scope | Component subtotal, credits | Contingency reserve, credits | Planning allocation, JAMKB-equivalent |
| --- | --- | --- | --- |
| 5 system chains | 228,082,462 | 21,917,538 | **250,000** |
| Additional 12-chain transition allowance | 180,837,972 | 19,162,028 | **200,000** |
| **Combined transition scope** | **408,920,434** | **41,079,566** | **450,000** |

The resulting references are **250,000 JAMKB-equivalent for the 5-chain offering**, or **450,000 including initial transition support for the other 12 chains**. The latter corresponds to **450,000,000 credits**. Reserves cover residual accounting charges, defined additional state and sizing uncertainty; the explicitly modelled program versions are already included. Actual builds, account structure and retention limits must be validated against the complete allocation.

### A.5 Analysis of sovereignty assurances

#### A.5.1 Definition and assurance standard

**Bounded operational sovereignty** means KSM governance can administer its services and committed resources under an enforceable boundary, while JAM Prime supplies shared consensus and security. The proposed standard is:

> **Throughout the agreed term, ordinary unilateral DOT-side actions cannot revoke, reassign or materially impair Kusama’s endowed resources or its authority over them. Changes weakening the protected bundle require valid KSM authorisation, except for conditions explicitly agreed and encoded in advance.**
> 

“Ordinary” includes all administrative paths permitted by deployed services, including upgrades and emergency-designated operations. The protocol supplies mechanisms; the protected domain, term and amendment conditions require additional logic and initialisation. [A2, A9]

#### A.5.2 Core allocation, authorizers and the assign privilege

The **Kusama Parachain Service must remain the assigner for the identified cores**, subject to agreed succession preserving the boundary. It authenticates allocation and authorisation instructions from Kusama Coretime. Participants may receive bounded coretime access while the underlying assign authority remains within Kusama’s domain. [A2, A9]

Because `assign` can nominate a successor, routine allocation must not accidentally transfer that authority. Initialisation, substitution and expiry must account for authorizer queue-and-pool lifecycles and exclude overlapping commitments to the same capacity.

#### A.5.3 Footprint backing and continued code and state availability

Protection must cover the **entire agreed footprint allowance**, including unoccupied capacity reserved for upgrades and growth. Transfers, refunds, cleanup and code replacement must preserve that entitlement and required program availability.

Backing could use funded balances, a manager-initialised **`gratis` storage offset**, or an agreed combination. The offset reduces the service’s threshold balance; it remains distinct from a transferable JAMKB instrument. Endowed backing, user-funded deposits and transitional allocations require identifiable treatment in the relevant accounts. [A9]

#### A.5.4 Always-accumulate treatment and control-plane liveness

The Kusama host needs protected always-accumulate registration with an agreed minimum gas allowance, **`g_K`**, sufficient for essential processing and due authorisation updates. **Its quantity remains unmeasured.** [A2]

The Gray Paper’s accumulation budget includes always-accumulate allowances. Practical validation must establish that the combined reserved workloads fit the intended hardware and block-time envelope, including rules governing further reservations. Preserving a nominal entry is insufficient if its gas allocation cannot perform the required work. [A9]

#### A.5.5 Constraining the manager and its successors

Under Gray Paper v0.8.0, the manager’s **`bless`** operation can change core assigners, always-accumulate allocations and the manager itself. Manager overrides take precedence over privilege-holder succession. Assigning a privilege to a Kusama service therefore requires additional protection against this override path. [A9]

A candidate construction is a **settlement-enforcing manager** that preserves Kusama’s protected entries for the term while allowing administration of unrelated resources. Its rules must constrain direct privilege changes, replacement of its own code, transfer to a successor and any supervisory alteration. Term-fixed enforcement or amendments requiring the affected parties’ consent could provide that boundary.

Manager removal is another hypothetical construction, with consequences for shared administration and recovery. Advance notice and timelocks can support review but leave any underlying unilateral revocation power intact.

#### A.5.6 KSM governance, service upgrades and supervision

Host upgrades must authenticate instructions from **Kusama Asset Hub**; parachain administration must authenticate the corresponding **Kusama Coretime** instructions. [A2]

**Supervision is version-sensitive.** The later Gray Paper snapshot dated **26 August 2026** permits supervisor-authorised service mutations and control of a supervisor balance; these mechanisms are absent from the released v0.8.0 account model. A compatible implementation baseline must therefore be established. [A9, A10]

Under the later model, initialisation must complete the transfer from creator supervision to self-supervision or explicitly constrained supervision. Protections must cover Kusama accounts, the manager and other enforcement components. Each actual mutation path needs restriction; the manager does not automatically intercept supervisory operations.

Recovery must remain usable when the host, Asset Hub or Coretime is impaired without introducing an unrestricted external administrator. Any additional recovery or enforcement service needs separately assessed resources and bounded powers.

#### A.5.7 Scope limits and residual risks

The assurance leaves Kusama dependent on JAM Prime’s **consensus, validator operation, availability and base-protocol evolution**. Protocol changes or contentious forks could alter the rules enforcing the boundary. Service bugs and harmful KSM-authorised decisions remain possible. Renewal, expansion and exit also retain technical and economic dependencies. [A9]

A known unrestricted manager or supervisor bypass is an unresolved design gap relative to the assurance standard. Residual-risk assessment follows closure of those ordinary administrative paths.

#### A.5.8 Summary and acceptance requirements

| Protected element | Evidence required |
| --- | --- |
| **Cores and authorisation** | Exclusive allocation for the agreed periods; authenticated KSM control and boundary-preserving handovers. |
| **Footprint and code** | Complete account-level backing, including reserved capacity; protected code availability and bounded release conditions. |
| **Accumulation** | An adequate protected gas floor for Kusama’s always-accumulate privilege. |
| **Management, upgrades and recovery** | Direct changes, code replacement, succession and supervision respect the same boundary; authorised recovery works under specified failures. |
| **Activation and expiry** | Resources and sovereignty become effective together; agreed expiry prevents both premature termination and unintended perpetual control. |

**Delivery requires resource sufficiency and enforceable KSM sovereignty to be verified together under one compatible implementation baseline.** The quantities above are planning allocations.

### References and assumptions

The fixed references, dated observations and provisional inputs below are retained from the supplied source material. Their status has not been independently refreshed for this appendix.

**[A1] [Emiel Sebastiaan and Arief Ernst](https://github.com/sdfinst/publications/blob/dece1d9091bb35c93727e40f9abfcad6bf555f6c/content/articles/kusama-futures-jam-era/index.md).** *Kusama Futures in the JAM Era*, fixed commit `dece1d9091bb35c93727e40f9abfcad6bf555f6c`. Basis for the cohabitation and endowment distinction.

**[A2] [Polkadot SDK](https://github.com/paritytech/polkadot-sdk/pull/11883/commits/c4d05e284ae962764afcd1f98599352e1a4e0a94).** *Parachain Service on JAM*, PR #11883, fixed commit `c4d05e284ae962764afcd1f98599352e1a4e0a94`, 8 September 2026. Architecture and interfaces: §§2–3; upgrades and management: §§5–6; footprint accounting: §6.1; authorisation: §7. Numerical reservations are design inputs, not measurements of a Kusama deployment.

**[A3] [Kusama OpenGov, WFC #573](https://kusama.subsquare.io/referenda/573).** *Kusama JAM Upgrade: Option A — Lightweight and independent*. Source for the independent 32-core, 1-second reference; no cohabitation authorisation or equivalent-performance claim is inferred.

**[A4] [Parachains.info](https://parachains.info/#/kusama/coretime).** *Kusama Coretime Explorer*, inventory retained 7 September 2026, using data dated 6 September at 05:17 UTC with a possible-staleness warning. The 17-parachain/41-core inventory is retained as a planning input. Future participation, utilisation and JAM equivalence require validation.

**[A5] [Gavin Wood](https://medium.com/polkadot-network/dot-dao-and-the-need-for-jamkb-a069e72e9728).** *DOT DAO and the need for $JAMKB*, 22 June 2026. Basis for continuing footprint-access backing. **1 JAMKB-equivalent = 1,000 footprint credits** is this appendix’s decimal planning convention; whole-unit equivalents are rounded upward from unrounded credit subtotals.

**[A6] Provisional host-program input.** An unpublished statement supplied by the authors attributes an approximate 300,000-byte service-program size to Oliver Tale-Yazdi. A dated message or reproducible artefact remains outstanding. The model uses 300,000 credits per version and 3 versions; associated accounting overhead is assigned to the contingency reserve.

**[A7] Oliver Tale-Yazdi.** *Westend Asset Hub Runtime: PolkaVM vs WASM Size*. The supplied build reference measures **14,565,142 bytes**, or **14,565,329 credits** with the per-parachain preimage overhead. Build workarounds and an omitted metadata hash qualify this reference. **15,000,000 credits per PVF version** remains an assumption for Kusama runtimes.

**[A8] [bkchr, Gray Paper PR #557](https://github.com/gavofyork/graypaper/pull/557/commits/47fba7420f9593288a8b750b2b0926fe75b8f443).** Proposed authorizer-program size increase, fixed commit `47fba7420f9593288a8b750b2b0926fe75b8f443`. The **196,608-byte** proposal, recorded as open on 11 September 2026, informs each 200,000-credit authorizer allowance. It is a separately identified sizing proposal. 2 resident blobs and 3 retained host/PVF versions are modelling assumptions.

**[A9] [Gavin Wood](https://github.com/gavofyork/graypaper/releases/tag/v0.8.0).** *JAM Gray Paper*, released v0.8.0. Relevant provisions: authorisation and accounts, §§8–9; privilege succession and manager precedence, §12.2, equations 12.18–12.19; accumulation budget, §12.3; host calls, Appendix B.7. These mechanisms require additional logic to enforce the proposed domain and term.

**[A10] [Gavin Wood](https://github.com/gavofyork/graypaper/issues/529) [Gavin Wood](https://github.com/gavofyork/graypaper/pull/539).** *JAM Gray Paper*, supplementary snapshot, commit `e5375148597a45a99d31c9aa6bce6c7bf3a48998`, 26 August 2026. Account and invocation provisions supply the later supervision semantics. Compatibility with the pinned host design remains to be established.

## Appendix B: Economic basis and financing assumptions

*Financing a Kusama security and resource endowment on JAM Prime*

This appendix is directed primarily to **Web3 Foundation** to inform its decisions on **Vision Fund allocations**, with **its economists** invited to critically assess the cost benchmark, financing assumptions and economic case.

### B.1 Introduction

This appendix examines the economic basis for Kusama to acquire a protected allocation on **JAM Prime**, the Polkadot-aligned JAM instance contemplated as the successor to Polkadot’s relay chain. A **security and resource endowment** would give KSM governance control over defined resources for an agreed term, while sharing the underlying security infrastructure. [B1]

Research questions: 

1. **What capacity and duration could Kusama finance?**
2. **Under what conditions would a complete endowment offer a credible economic arrangement for both KSM DAO and DOT DAO?**

The assessment combines a proportional operating-cost benchmark, working financing references, an independent-JAM comparison and the scope of the bilateral package. Technical resource requirements and sovereignty mechanisms are developed in Appendix A. All monetary comparisons below are in US dollars unless another denomination is stated.

### B.2 Cost benchmark

#### B.2.1 The compute model

JAM Prime is modelled with **up to 341 execution cores and 1,023 validator positions**. Coretime can be allocated or sold, while the network remunerates validators for operating the shared infrastructure. Active capacity can scale with demand, within the network’s operating limits. [B2, B8]

A **coretime-year (CTY)** means 1 core allocated for 1 year. It combines capacity and duration in a useful planning unit: 16 cores for 5 years and 8 cores for 10 years each represent 80 CTYs. Allocations can be increased or reduced over time, with CTYs added across the respective periods.

Compute is the primary pricing reference in this model. Footprint and bandwidth are secondary resource dimensions; their requirements, together with accumulation capacity, must still be sufficient for the selected workloads. The complete package addresses them in B.5. [B1, B2]

The model distributes a common operating budget across the reference capacity:

`1,023 validator positions ÷ 341 cores = 3 validator-equivalents per core`

`3 × US$3,000 per month × 12 months = US$108,000 per CTY`

`Compute benchmark = total cores × years × US$108,000`

The resulting figure is a **proportional operating-cost benchmark**.

#### B.2.2 Why US$3,000 per validator-month is a reasonable planning allowance

Professional operation combines infrastructure, redundancy, technical labour and continuing operator availability. The following **illustrative monthly budget per validator position** makes the adopted allowance explicit:

| Cost component | Monthly allowance | Basis of the allowance |
| --- | --- | --- |
| Primary compute and storage hosting | US$800 | Server capacity, power, basic connectivity and amortised setup costs. |
| Additional bandwidth and resilience | US$400 | Additional traffic, backups and a share of pooled standby capacity. |
| Technical operations and support | US$1,200 | 12 allocated hours at US$100 per hour, covering upgrades, maintenance and a share of incident-response and on-call costs. |
| Monitoring, security tooling and administration | US$300 | Allocated tooling, access management and business overhead. |
| Contingency and operator margin | US$300 | Allowance for operational variability and sustainable delivery. |
| **Total** | **US$3,000** | **Illustrative managed-operation budget.** |

For an infrastructure price check, Hetzner’s published June 2026 tariff lists the AX162-1 at **US$722.10 per month**, excluding IPv4, setup and VAT. This anchors the order of magnitude of server expenditure; production JAM requirements still need validation. [B3]

The labour, resilience and overhead allocations are modelling assumptions requiring operator validation. Protocol development and the return required on bonded security capital sit outside this benchmark. At the earlier US$5,000 monthly assumption, the corresponding rate would be US$180,000 per CTY. [B1]

#### B.2.3 Capacity–duration comparison

**Amounts are US$ million**, at US$108,000 per CTY. Each core count is the entire Kusama allocation, including system and other workloads. The comparison uses constant capacity and rates, without discounting or price escalation. The longer durations extend the same arithmetic; they assume no established long-term tariff.

| Total cores | 1 year | 2 years | 3 years | 4 years | 5 years | 10 years | 15 years | 20 years |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0.108 | 0.216 | 0.324 | 0.432 | 0.540 | 1.080 | 1.620 | 2.160 |
| 8 | 0.864 | 1.728 | 2.592 | 3.456 | 4.320 | 8.640 | 12.960 | 17.280 |
| 12 | 1.296 | 2.592 | 3.888 | 5.184 | 6.480 | 12.960 | 19.440 | 25.920 |
| 16 | 1.728 | 3.456 | 5.184 | 6.912 | 8.640 | 17.280 | 25.920 | 34.560 |
| 24 | 2.592 | 5.184 | 7.776 | 10.368 | 12.960 | 25.920 | 38.880 | 51.840 |
| 32 | 3.456 | 6.912 | 10.368 | 13.824 | 17.280 | 34.560 | 51.840 | 69.120 |
| 48 | 5.184 | 10.368 | 15.552 | 20.736 | 25.920 | 51.840 | 77.760 | 103.680 |
| 64 | 6.912 | 13.824 | 20.736 | 27.648 | 34.560 | 69.120 | 103.680 | 138.240 |

16 cores for 5 years represents **80 CTYs and US$8.64 million**. 8 cores for 10 years provides the same compute quantity; the longer term changes the package’s maintenance and protection obligations.

### B.3 Financing capacity

#### B.3.1 Funds potentially available for an endowment

The financing assessment starts with two concrete working references:

| Source | Gross working reference | Deductions before an endowment contribution |
| --- | --- | --- |
| **Kusama Vision Programme** | **10,000,000 DOT**, originally committed from Web3 Foundation’s own treasury for Kusama’s benefit. [B4] | Prior expenditure, outstanding obligations and funding retained for the continuing programme. |
| **Kusama Treasury** | **883,760 KSM**, from the authors’ doTreasury snapshot supplied on 11 September 2026; approximately **US$3.23 million** at the study’s US$3.65/KSM valuation. [B5] | Existing commitments, continuing operations, programme funding and contingency reserves. |

WFC #498 establishes the original Vision Programme commitment and contemplated infrastructure support. Repurposing requires authorisation from the parties controlling the funds. The Treasury quantity and valuation remain historical working inputs. [B4, B5]

`Potential Vision contribution = 10,000,000 DOT − prior expenditure − outstanding obligations − retained programme funding`

The supplied material provides no consolidated total for these deductions. Web3 Foundation’s vision programme reconciliation and KSM DAO’s determination of available Treasury resources are required before a payment ceiling can be established. [B5, B6]

For the comparison below, the **US$10 million illustrative ceiling** corresponds to the original 10 million DOT at a **US$1.00/DOT planning rate before deductions**. It serves as a scenario-screening limit. The approved commitment must fit reconciled financing and leave the vision programme funded.

At that planning rate, a US$8.64 million settlement would use **8.64 million DOT**, leaving **1.36 million DOT from the original allocation** to cover all prior expenditure, outstanding obligations and retained programme funding. Larger deductions require a smaller package, supplementary financing or different agreed valuation terms.

#### B.3.2 DOT-denominated settlement

An authorised contribution from existing Vision Programme DOT can settle directly with DOT DAO. This avoids converting a large KSM position and asking the counterparty to assume KSM price and execution risk. **DOT DAO’s willingness to accept a substantial KSM payment has not been established.** Acceptance would require an explicit agreement on that exposure. Reconciled Kusama Treasury resources could instead support continuing programme activity, subject to KSM approval. [B1, B4]

Direct settlement also changes the potential route of Vision Programme expenditure. **To the extent that programme DOT would otherwise be sold to meet project expenses, transferring it directly to DOT DAO would avoid those sales at settlement.** DOT DAO would receive the contribution and control its subsequent disposition. Any reduction in exchange selling depends on how the proceeds are subsequently held or spent; no price effect is assumed. This is a potential counterparty consideration, developed further in B.5.

The agreement should specify a valuation date or averaging period and a fixed DOT payment ceiling:

`DOT consideration = agreed US-dollar package value ÷ agreed US-dollar value per DOT`

Any KSM contribution to settlement needs an executable conversion arrangement. Indicative dollar valuations do not establish the proceeds available from selling those holdings.

#### B.3.3 Capacity–duration comparison against US$10 million

**Amounts are US$ million.** 🟩 Below US$10 million. 🟥 Above US$10 million. The colours compare compute benchmarks with the illustrative ceiling; a green cell still requires confirmed financing and agreement on the complete package.

| Total cores | 1 year | 2 years | 3 years | 4 years | 5 years | 10 years | 15 years | 20 years |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 🟩 0.108 | 🟩 0.216 | 🟩 0.324 | 🟩 0.432 | 🟩 0.540 | 🟩 1.080 | 🟩 1.620 | 🟩 2.160 |
| 8 | 🟩 0.864 | 🟩 1.728 | 🟩 2.592 | 🟩 3.456 | 🟩 4.320 | 🟩 8.640 | 🟥 12.960 | 🟥 17.280 |
| 12 | 🟩 1.296 | 🟩 2.592 | 🟩 3.888 | 🟩 5.184 | 🟩 6.480 | 🟥 12.960 | 🟥 19.440 | 🟥 25.920 |
| 16 | 🟩 1.728 | 🟩 3.456 | 🟩 5.184 | 🟩 6.912 | 🟩 8.640 | 🟥 17.280 | 🟥 25.920 | 🟥 34.560 |
| 24 | 🟩 2.592 | 🟩 5.184 | 🟩 7.776 | 🟥 10.368 | 🟥 12.960 | 🟥 25.920 | 🟥 38.880 | 🟥 51.840 |
| 32 | 🟩 3.456 | 🟩 6.912 | 🟥 10.368 | 🟥 13.824 | 🟥 17.280 | 🟥 34.560 | 🟥 51.840 | 🟥 69.120 |
| 48 | 🟩 5.184 | 🟥 10.368 | 🟥 15.552 | 🟥 20.736 | 🟥 25.920 | 🟥 51.840 | 🟥 77.760 | 🟥 103.680 |
| 64 | 🟩 6.912 | 🟥 13.824 | 🟥 20.736 | 🟥 27.648 | 🟥 34.560 | 🟥 69.120 | 🟥 103.680 | 🟥 138.240 |

At this benchmark, US$10 million corresponds to approximately **92.6 CTYs**. 16 cores for 5 years and 8 cores for 10 years fit that gross ceiling. 24 cores for 4 years, 32 cores for 3 years and 48 cores for 2 years each require 96 CTYs, or **US$10.368 million**.

### B.4 Comparison of a 32-core endowment with independent JAM

WFC #573 proposes an independent Kusama JAM with **32 cores, a 1-second block time and KSM supporting its economic functions**. Kusama would retain responsibility for its validator network, security financing and base-protocol operation. [B7]

Applying the common benchmark to 32 cores gives **US$3.456 million annually, US$17.28 million over 5 years and US$34.56 million over 10 years**. A 32-core JAM Prime allocation produces the same proportional compute benchmark. The actual cost of WFC #573 requires its own assessment of validator numbers, hardware, timing, security and engineering; the normalised comparison supplies no implementation quotation.

Cohabitation changes the responsibilities Kusama must finance. A negotiated endowment purchases a defined term on shared infrastructure, with migration and maintenance allocated through the agreement. Independent operation retains recurring security expenditure and responsibility for a separate network. **Under the issuance-funded model contemplated by WFC #573, KSM issuance would continue to cover security expenditure not met by revenues or other funding.** Kusama’s own vision programme and service-level operations require funding under either arrangement. [B1, B7]

The 16-core, 5-year configuration examined in the position paper halves the 5-year compute quantity to **US$8.64 million**. That arithmetic reduction follows from accepting fewer cores. The further economic case for cohabitation depends on shared engineering, retirement of the separate security obligation and the agreed complete-package price. A 5-year, 32-core allocation exceeds the US$10 million comparison ceiling under the common benchmark, whichever architecture is being normalised.

### B.5 Complete-package scope and the DOT-side case

#### B.5.1 One complete commitment

The proposed US$8.64 million envelope seeks the following **complete package**, subject to technical validation and counterparty agreement. [B1]

| Component | Proposed negotiating scope |
| --- | --- |
| **Compute** | 16 identified cores for 5 years from verified operational acceptance. |
| **Footprint** | 450,000 JAMKB-equivalent, corresponding to 450,000,000 footprint credits under the study’s convention, backed and usable throughout the term. |
| **Accumulation** | Protected always-accumulate registration and a quantified gas allowance adequate for the agreed workloads. |
| **Sovereignty assurances** | Protected KSM control over allocation, authorisation and service administration, with manager and supervisory restrictions covering the agreed term. |
| **Migration and maintenance** | An accepted, Fellowship-led mandate covering the agreed Kusama infrastructure, with named delivery responsibilities and maintenance throughout the operating term. |

The compute formula separately prices none of the additional components. Their inclusion within the envelope is a negotiating request. Footprint requirements remain a continuing balance, and a 10-year arrangement extends maintenance and protection obligations beyond those of a 5-year arrangement with equal CTYs. [B1]

Kusama must also fund development, vision programme activity and operations outside the accepted package. Final settlement should require verified resource and sovereignty delivery, an accepted maintenance arrangement, and defined activation, expiry and non-delivery remedies. Preparatory expenditure charged to the package counts towards its ceiling.

#### B.5.2 The economic case for DOT DAO

In Gavin Wood’s *Island Story*, DOT DAO operates an island’s power infrastructure. Coretime supplies the power; footprint provides the sites for development. His economic argument connects infrastructure revenue to a productive local economy, with secure resource rights encouraging investment and activity potentially increasing demand for both power and remaining territory. [B8]

Applied to this proposal, Kusama would occupy a protected, self-governed district on that shared island. Its KSM economy would retain its own governance while using common infrastructure and interacting with surrounding services. This application of the analogy identifies four potential components of the DOT-side case. [B1]

**A substantial direct DOT contribution.** DOT DAO would receive consideration for the allocation in DOT, without taking a KSM position. Where Vision Programme funds would otherwise have been sold for project expenditure, direct settlement would redirect those funds to DOT DAO. Subsequent treasury decisions determine whether that changes aggregate exchange selling.

**Paid utilisation of shared infrastructure.** A bounded, prepaid allocation could contribute to operating costs where capacity would otherwise remain unused. Its economic value depends on delivery costs and foregone alternative sales. The 341-core reference establishes the model’s scale; capacity available for this commitment must be identified. [B1, B2]

**A differentiated, connected economy.** The proposed privacy, cryptographic and experimental services could generate demand beyond existing parachain hosting. Connections to Polkadot services could create additional transactions and resource demand within JAM Prime. [B1] In the island analogy, development may also increase the value of footprint rights retained by DOT DAO. These effects require useful services and actual participation. [B8]

**A basis for investment and shared engineering.** Protected resource rights could give Kusama participants confidence to build for the agreed term. Common host code, interfaces and coordinated maintenance could reduce duplicated work, while Kusama retains responsibility for its programme choices. The agreement would define the infrastructure and maintenance commitments DOT DAO accepts. [B1]

**Hosting another token economy creates no automatic return for DOT DAO.** The assessment needs identifiable benefits through the settlement, resource demand or economic interaction. Kusama activity concentrated in an isolated economy, or supported mainly by redirecting existing Polkadot demand, would provide less evidence of additional value. [B1, B8]

DOT DAO would commit compute, footprint and accumulation resources, accept restrictions on reassignment, and fund the agreed delivery and maintenance obligations. Its assessment should compare the consideration and prospective benefits with those obligations, alternative demand and the flexibility surrendered throughout the term. [B1]

### Sources and assumptions

**[B1] Authors’ working papers.** *The Case for a Kusama Security and Resource Endowment on JAM Prime*, version 4, 15 September 2026;

**[B2] JAM technical references.** [Parachain Service on JAM](https://github.com/paritytech/polkadot-sdk/pull/11883/commits/c4d05e284ae962764afcd1f98599352e1a4e0a94), fixed commit `c4d05e284ae962764afcd1f98599352e1a4e0a94`; and the official [JAM Chain overview](https://wiki.polkadot.com/learn/learn-jam-chain/). Configuration and resource references retained from the supplied draft. They establish no endowment quotation or available sale inventory.

**[B3] [Hetzner](https://www.hetzner.com/dedicated-rootserver/ax162/).** Price adjustment effective 15 June 2026, updated 8 July 2026 and checked 16 September 2026. AX162-1: US$722.10 per month, excluding IPv4 and VAT, with setup separate. An infrastructure price reference; the illustrative validator budget is not a quotation for a validated JAM deployment.

**[B4] [Kusama OpenGov, WFC #498](https://kusama.subsquare.io/referenda/498).** A New Kusama Vision — 10 Million DOT from W3F & Transition Away From Being A Canary Network. Source for the original commitment from Web3 Foundation’s own treasury and contemplated infrastructure support. It establishes no remaining uncommitted balance or authorisation for this endowment.

**[B5] Historical working financing references.** The authors’ 11 September 2026 study records a doTreasury input of 883,760 KSM at an indicative US$3.65/KSM, giving US$3,225,724. These dated inputs have not been independently refreshed for version 2. US$1.00/DOT and the US$10 million ceiling are separate planning assumptions before deductions.

**[B6] Programme records identified in the supplied draft.** The official [Kusama Vision Programme page](https://kusama.network/vision) and [SubSquare multi-asset child-bounty records](https://kusama.subsquare.io/treasury/child-bounties). A consolidated reconciliation of expenditure, outstanding obligations and retained funding remains outstanding in the supplied material. No missing deduction is assumed to be zero.

**[B7] [Kusama OpenGov, WFC #573](https://kusama.subsquare.io/referenda/573).** Kusama JAM Upgrade: Option A — Lightweight and independent. Source for the proposed 32-core, 1-second configuration and issuance-based security financing. The proposal’s cost and performance claims require dedicated validation; this appendix supplies a normalised comparison.

**[B8] [Gavin Wood](https://medium.com/polkadot-network/dot-daoism-under-jam-an-island-story-efe0d02ee084).** DOT DAOism under JAM: An Island Story, 27 June 2026. Source for the power-and-territory analogy, flexible capacity, infrastructure revenue, local economic development and continuity of resource rights. B.5 applies that argument to the proposed Kusama endowment; this application and its prospective benefits are the authors’ analysis.

## Appendix C: Template KSM DAO Wish for Change proposal

*This example uses Scenario A’s 16-core, 5-year configuration. Capacity, duration and consideration can be revised following community discussion. The complete-bundle, sovereignty, delivery and funding conditions should remain explicit.*

### Title

**Seek 16 cores, 450,000 JAMKB-equivalent and 5 years of protected KSM self-government on JAM Prime, with Fellowship-led migration and maintenance**

### Proposed resolution

KSM DAO supports developing and negotiating a security-and-resource endowment on JAM Prime on the following basis.

**1. Strategic direction.** Pursue cohabitation as the preferred direction for further planning, revising the independent preference expressed in WFC #573. Develop a KSM-centred offering and a funded vision programme for the proposed term, beginning with monetary redesign in the first operating year and initial plans for differentiation through JAM Prime’s capabilities. Final implementation and migration require a further KSM DAO decision.

**2. Specified resource request.** Seek the following complete operating allocation:

| Resource or term | Proposed requirement |
| --- | --- |
| Compute | **16 total cores**, exclusively committed for Kusama’s allocation throughout the agreed term. The final specification must identify the cores or an agreed equivalent-substitution mechanism. |
| Footprint | **450,000 JAMKB-equivalent**, equal to **450,000,000 Gray Paper’s footprint credits**, backed and usable in the relevant service accounts throughout the term. The final technical specification must establish the corresponding implementation units and backing mechanism. |
| Footprint scope | A planning allowance of 250,000 JAMKB-equivalent for the 5 system chains, plus 200,000 for initial transition support under the study’s state and code assumptions. KSM governance must define participant quotas, future upgrade backing and permissible reallocation. |
| Accumulation | Protected always-accumulate registration and a quantified minimum gas allowance sufficient for the agreed workloads. The Fellowship-led technical proposal must supply the quantities and validate the combined execution envelope before final approval. |
| Duration | **5 years from verified operational acceptance** of the complete security-and-resource bundle, with an accepted maintenance arrangement in force. |
| Consideration | A **US$8.64 million complete-package negotiating reference**, converted into a fixed DOT ceiling through an agreed valuation method. |

**3. Sovereignty assurances.** Require protection against ordinary unilateral DOT-side revocation, reassignment or material impairment throughout the term. KSM governance must control internal allocation, authorisation policy, service administration and upgrades. The implementation must protect the endowed core-assignment authority, effective footprint backing and accumulation floor. Manager operations, code replacement, succession, supervision, transfers and recovery must respect the same boundary. Changes weakening the protected bundle require valid KSM authorisation, except for conditions expressly agreed and encoded in advance. Kusama receives no authority over unrelated resources, JAM Prime’s validator selection, or registrar.

**4. Fellowship-led migration and maintenance.** Ask DOT DAO to include a mandate for the Polkadot Fellowship to oversee specification, implementation, validation and migration of the agreed Kusama domain, followed by maintenance for the full 5-year term. Seek the Fellowship’s acceptance and a delivery plan, technical scope, budget, reporting, recovery support and continuity arrangements. The mandate should cover the agreed host and system-infrastructure responsibilities while preserving KSM authorisation over domain policy and upgrades.

**5. Complete-package settlement.** Seek inclusion of the specified resources, sovereignty protections and accepted migration and maintenance mandate within one DOT consideration. The final proposal must state the valuation date or averaging period, the DOT ceiling, confirmed contributions and responsibility for price movement before settlement. Final payment requires verified security-and-resource delivery and an accepted, maintenance arrangement. Any preparatory expenditure charged to the package must be identified and counted against its ceiling. The agreement must specify payment protection, activation, non-delivery, recovery and expiry arrangements. Additional consideration requires further authorisation before acceptance.

**6. Funding and vision programme continuity.** Seek Web3 Foundation’s approval for a contribution from reconciled, uncommitted Vision Programme DOT resources, accounting for existing obligations and retained programme funding. Develop a renewed vision programme budget and assess a separately authorised KSM Treasury contribution to its activities. Any treasury contribution to the settlement or extraordinary new issuance requires explicit approval and achievable DOT funding. Participant prepayments must have defined delivery and refund terms and must be recorded alongside the obligations they finance.

**7. Transition proposals.** Prepare separate proposals to downsize Kusama’s total core allocation to 16, with 7 cores assigned to the system workloads in the study’s retained inventory and at most 9 remaining for bulk coretime sales. Consult affected teams on funded access, migration and alternative arrangements, and assess staged validator reductions as workload obligations decline. Existing commitments require explicit treatment, and internal allocations remain subject to KSM decisions and validated requirements. With issuance and staking rules unchanged, validator reductions would leave aggregate staking expenditure unchanged; potential benefits concern remaining operators’ profitability and possible commission reductions affecting nominators. Any change to aggregate staking expenditure requires separate approval. Final retirement of the separate validator set and KSM-funded staking rewards follows an approved, verified transition.

**8. Return for approval.** Present the complete bilateral terms to KSM DAO with the Fellowship’s accepted role and technical assessment, exact resource quantities, reviewed authority and recovery mechanisms, confirmed financing, maintenance and vision programme budgets, and treatment of existing participants. Obtain the necessary DOT-side and funding-party approvals. Material changes to capacity, duration, footprint, protections or consideration must be made explicit for the final decision.

**9. Continuation.** Establish a KSM review timetable leading to a substantive renewal, extension, resizing or alternative-arrangement decision by the end of the third operating year, or earlier where technical lead times require it. These reviews create no additional counterparty right to impair the protected endowment during its term.

**Effect of this vote.** Approval expresses a strategic and negotiating direction. It authorises no transfer, issuance, cancellation of existing access, validator reduction, implementation expenditure or migration. Appointment and funding of representatives, preparatory work and changes to the present network require separate explicit decisions. Final settlement and transition require approval of the complete arrangement.

## Appendix D: Community feedback

*Community comments on the Scenario Analysis*

### D.1 Scope and attribution

This appendix summarises the public discussion under *Kusama Futures in the JAM Era* through **post #18**, as reviewed on **17 September 2026**. It records **16 community contributions from 11 accounts**, grouped by contributor in order of first appearance. The latest included comments were posted on **16 September 2026**. The original publication and the authors’ follow-up in post #9 are excluded from the comment record. [D1]

The comments concern the earlier Scenario Analysis. The entries below are attributed summaries, with disclosures limited to those made in the comments. The original posts remain the authoritative record of each contributor’s words. Contributor claims and interpretations are presented as their views.

### D.2 birdbrain | Demand-led revenue and KSM’s monetary design

**Source:** [Post #2](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/2), 30 August 2026.

Birdbrain identifies itself as an on-chain collective on Kreivo, participating in KreivoCollective governance. It discloses KSM holdings, purchases for membership onboarding and support for the independent direction in WFC #573.

The comment challenges reliance on market capitalisation, requests comparable scrutiny of Polkadot’s security funding and disputes the inference that reducing security obligations should lead to capped supply. It presents Kreivo memberships, Bloque activity and dUSD-denominated commerce fees as a demand-led alternative. It asks for an explicit revenue comparison and acknowledges that a route from Kreivo revenues to Kusama’s security budget has not been established.

### D.3 batbayar | Footprint pricing and lease terms

**Sources:** [Post #3](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/3), 31 August 2026, and [post #6](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/6), 3 September 2026.

Batbayar writes from a DOT-side perspective and states that they submitted WFC #1927 and supported WFC #1926.

The comments argue that footprint must be explicitly priced and that an endowment should respect DOT-side allocation and revenue policy. The later contribution develops a lease-based approach with defined renewal and return conditions. It also agrees that infrastructure alone cannot supply a mission or builders.

### D.4 florentina57 | Purpose, builders and accountability

**Sources:** [Post #4](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/4), 31 August 2026; [post #12](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/12), 15 September 2026; and [post #15](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/15), 16 September 2026.

In the first comment, florentina57 identifies as a Kusama validator/operator and discloses an earlier Proof of Personhood bounty curatorship in the Vision Programme, from which they had decided to resign.

The first contribution questions whether continuing infrastructure expenditure is justified without a clear purpose, builders and an accountable programme. It describes operator economics and dissatisfaction with programme results. The later comments question continuation without a useful strategy and favour keeping the discussion together on the public forum.

### D.5 ultracoconut | Validator reductions, inflation and low fees

**Sources:** [Post #5](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/5), 1 September 2026, and [post #14](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/14), 16 September 2026.

Ultracoconut proposes halving the validator set, reducing inflation and making very low transaction fees Kusama’s main offering. The later comment renews the call for changes, questions accountability, alleges excessive validator influence and offers to help prepare a WFC.

### D.6 OliverTY | JAM multi-tenancy

**Source:** [Post #7](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/7), 3 September 2026.

OliverTY offers a personal view that lightweight JAM and cohabitation are promising directions. The comment emphasises that cohabitation could demonstrate JAM’s ability to support distinct tenants and encourage other projects to pursue similar arrangements.

### D.7 Rom1.io | Sovereignty, differentiation and Treasury priorities

**Sources:** [Post #8](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/8), 3 September 2026, and [post #11](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/11), 15 September 2026.

Rom1.io asks for a clear KSM DAO / DOT DAO control matrix, treatment of disagreements, exit and continuity arrangements, and concrete reasons for users and projects to choose Kusama. The later comment questions funding an audit before the network’s direction is settled.

### D.8 Pluto | Merger or consolidation

**Source:** [Post #10](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/10), 15 September 2026.

Pluto proposes considering merger or sunsetting Kusama’s independent layer-zero role, citing duplicated infrastructure and fragmented liquidity, development and attention. The comment asks whether experimentation warrants a separate economy and warns against preserving the network merely because it already exists.

### D.9 GabrielJ | Participation in strategy work

**Source:** [Post #13](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/13), 16 September 2026.

GabrielJ offers to help develop a viable strategy for Kusama and removes a proposed Matrix-room link to avoid scattering the conversation.

### D.10 RustSyndicate | Privacy and zero-knowledge applications

**Source:** [Post #16](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/16), 16 September 2026.

RustSyndicate identifies as a Kusama Asset Hub Ethereum RPC operator and advocates privacy, censorship resistance and resilient smart-contract execution. The comment cites ZK developer interest, Vision Programme work with zk-email on Noir, and shield.markets as examples supporting this direction.

### D.11 edvoki | Consolidation and a wider multi-tenant JAM

**Source:** [Post #17](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/17), 16 September 2026.

Edvoki favours option 2, citing operator costs, limited activity and Vision Programme accountability concerns. The comment suggests demonstrating JAM’s multi-tenancy through projects such as Hydration, Bifrost, peaq and potentially DarkFi, rather than preserving Kusama principally for that demonstration.

### D.12 pinco-labs | An independent canary for JAM

**Source:** [Post #18](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482/18), 16 September 2026.

Pinco-labs asks who would test potentially damaging JAM upgrades before Polkadot adopts them. The comment argues that Polkadot should help sustain independent Kusama infrastructure where it relies on Kusama for real-world canary testing.

### Source and review basis

**[D1] [Polkadot Forum](https://forum.polkadot.network/t/kusama-futures-in-the-jam-era/18482).** *Kusama Futures in the JAM Era*. Reviewed **17 September 2026** through **post #18**. The entries link to the individual comments. Coverage is limited to this public thread.
