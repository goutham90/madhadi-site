declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"21-cfr-part-11-eu-annex-11.md": {
	id: "21-cfr-part-11-eu-annex-11.md";
  slug: "21-cfr-part-11-eu-annex-11";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"483-warning-letter-response.md": {
	id: "483-warning-letter-response.md";
  slug: "483-warning-letter-response";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"agile-devops-csv.md": {
	id: "agile-devops-csv.md";
  slug: "agile-devops-csv";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-governance-gxp.md": {
	id: "ai-governance-gxp.md";
  slug: "ai-governance-gxp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-in-pharmacovigilance.md": {
	id: "ai-in-pharmacovigilance.md";
  slug: "ai-in-pharmacovigilance";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-inspection-readiness.md": {
	id: "ai-inspection-readiness.md";
  slug: "ai-inspection-readiness";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-ml-medical-devices-samd.md": {
	id: "ai-ml-medical-devices-samd.md";
  slug: "ai-ml-medical-devices-samd";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-model-credibility-trust.md": {
	id: "ai-model-credibility-trust.md";
  slug: "ai-model-credibility-trust";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-regulatory-affairs-cmc.md": {
	id: "ai-regulatory-affairs-cmc.md";
  slug: "ai-regulatory-affairs-cmc";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-risk-assessment-gxp.md": {
	id: "ai-risk-assessment-gxp.md";
  slug: "ai-risk-assessment-gxp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-supplier-vendor-collaboration.md": {
	id: "ai-supplier-vendor-collaboration.md";
  slug: "ai-supplier-vendor-collaboration";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-visual-inspection-validation.md": {
	id: "ai-visual-inspection-validation.md";
  slug: "ai-visual-inspection-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-workforce-organizational-readiness.md": {
	id: "ai-workforce-organizational-readiness.md";
  slug: "ai-workforce-organizational-readiness";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"alcoa-plus-deep-dive.md": {
	id: "alcoa-plus-deep-dive.md";
  slug: "alcoa-plus-deep-dive";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"analytical-instrument-qualification.md": {
	id: "analytical-instrument-qualification.md";
  slug: "analytical-instrument-qualification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"analytical-method-transfer.md": {
	id: "analytical-method-transfer.md";
  slug: "analytical-method-transfer";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"annex-1-contamination-control-strategy.md": {
	id: "annex-1-contamination-control-strategy.md";
  slug: "annex-1-contamination-control-strategy";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"annual-product-review-pqr.md": {
	id: "annual-product-review-pqr.md";
  slug: "annual-product-review-pqr";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aseptic-processing-and-media-fills.md": {
	id: "aseptic-processing-and-media-fills.md";
  slug: "aseptic-processing-and-media-fills";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"atmp-gmp-cell-gene-manufacturing.md": {
	id: "atmp-gmp-cell-gene-manufacturing.md";
  slug: "atmp-gmp-cell-gene-manufacturing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"audit-finding-classification.md": {
	id: "audit-finding-classification.md";
  slug: "audit-finding-classification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"audit-trail-design-and-review.md": {
	id: "audit-trail-design-and-review.md";
  slug: "audit-trail-design-and-review";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"automation-validation-plc-scada-dcs.md": {
	id: "automation-validation-plc-scada-dcs.md";
  slug: "automation-validation-plc-scada-dcs";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"backup-restore-disaster-recovery-validation.md": {
	id: "backup-restore-disaster-recovery-validation.md";
  slug: "backup-restore-disaster-recovery-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"batch-disposition-decisions.md": {
	id: "batch-disposition-decisions.md";
  slug: "batch-disposition-decisions";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"batch-record-review-gmp.md": {
	id: "batch-record-review-gmp.md";
  slug: "batch-record-review-gmp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"bioassay-and-elisa-validation.md": {
	id: "bioassay-and-elisa-validation.md";
  slug: "bioassay-and-elisa-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"bioburden-and-endotoxin-testing.md": {
	id: "bioburden-and-endotoxin-testing.md";
  slug: "bioburden-and-endotoxin-testing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"bla-readiness-data-package.md": {
	id: "bla-readiness-data-package.md";
  slug: "bla-readiness-data-package";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"blinding-and-unblinding-management.md": {
	id: "blinding-and-unblinding-management.md";
  slug: "blinding-and-unblinding-management";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"breaking-into-gxp-quality.md": {
	id: "breaking-into-gxp-quality.md";
  slug: "breaking-into-gxp-quality";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"building-a-gxp-data-flow-map.md": {
	id: "building-a-gxp-data-flow-map.md";
  slug: "building-a-gxp-data-flow-map";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"building-ai-tools-for-gxp.md": {
	id: "building-ai-tools-for-gxp.md";
  slug: "building-ai-tools-for-gxp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"calibration-and-metrology-program.md": {
	id: "calibration-and-metrology-program.md";
  slug: "calibration-and-metrology-program";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"capa-effectiveness-verification.md": {
	id: "capa-effectiveness-verification.md";
  slug: "capa-effectiveness-verification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"career-guide-gxp-validation.md": {
	id: "career-guide-gxp-validation.md";
  slug: "career-guide-gxp-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cdmo-oversight-quality-agreements.md": {
	id: "cdmo-oversight-quality-agreements.md";
  slug: "cdmo-oversight-quality-agreements";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cell-gene-therapy-data-integrity.md": {
	id: "cell-gene-therapy-data-integrity.md";
  slug: "cell-gene-therapy-data-integrity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"certificate-of-analysis.md": {
	id: "certificate-of-analysis.md";
  slug: "certificate-of-analysis";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cfr-210-211-cgmp-walkthrough.md": {
	id: "cfr-210-211-cgmp-walkthrough.md";
  slug: "cfr-210-211-cgmp-walkthrough";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"change-control-validated-systems.md": {
	id: "change-control-validated-systems.md";
  slug: "change-control-validated-systems";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"chromatography-data-system-integrity.md": {
	id: "chromatography-data-system-integrity.md";
  slug: "chromatography-data-system-integrity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"clean-utilities-qualification.md": {
	id: "clean-utilities-qualification.md";
  slug: "clean-utilities-qualification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cleaning-validation-execution.md": {
	id: "cleaning-validation-execution.md";
  slug: "cleaning-validation-execution";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cleaning-validation-fundamentals.md": {
	id: "cleaning-validation-fundamentals.md";
  slug: "cleaning-validation-fundamentals";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cleanroom-classification-iso-14644.md": {
	id: "cleanroom-classification-iso-14644.md";
  slug: "cleanroom-classification-iso-14644";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"clinical-data-management-cdisc.md": {
	id: "clinical-data-management-cdisc.md";
  slug: "clinical-data-management-cdisc";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"clinical-qa-gcp-data-integrity.md": {
	id: "clinical-qa-gcp-data-integrity.md";
  slug: "clinical-qa-gcp-data-integrity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"clinical-statistical-programming-validation.md": {
	id: "clinical-statistical-programming-validation.md";
  slug: "clinical-statistical-programming-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"clinical-systems-gcp-digital-quality.md": {
	id: "clinical-systems-gcp-digital-quality.md";
  slug: "clinical-systems-gcp-digital-quality";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cloud-saas-validation.md": {
	id: "cloud-saas-validation.md";
  slug: "cloud-saas-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cold-chain-shipping-qualification.md": {
	id: "cold-chain-shipping-qualification.md";
  slug: "cold-chain-shipping-qualification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"combination-products-cgmp-part-4.md": {
	id: "combination-products-cgmp-part-4.md";
  slug: "combination-products-cgmp-part-4";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"commissioning-qualification-astm-e2500.md": {
	id: "commissioning-qualification-astm-e2500.md";
  slug: "commissioning-qualification-astm-e2500";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"comparability-and-potency-assays.md": {
	id: "comparability-and-potency-assays.md";
  slug: "comparability-and-potency-assays";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"compendial-method-verification.md": {
	id: "compendial-method-verification.md";
  slug: "compendial-method-verification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"computer-software-assurance-fda.md": {
	id: "computer-software-assurance-fda.md";
  slug: "computer-software-assurance-fda";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"conducting-a-supplier-audit.md": {
	id: "conducting-a-supplier-audit.md";
  slug: "conducting-a-supplier-audit";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"container-closure-integrity-testing.md": {
	id: "container-closure-integrity-testing.md";
  slug: "container-closure-integrity-testing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"continued-process-verification-cpv.md": {
	id: "continued-process-verification-cpv.md";
  slug: "continued-process-verification-cpv";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"cross-contamination-control-shared-facilities.md": {
	id: "cross-contamination-control-shared-facilities.md";
  slug: "cross-contamination-control-shared-facilities";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"csv-csa-audit-checklist.md": {
	id: "csv-csa-audit-checklist.md";
  slug: "csv-csa-audit-checklist";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"csv-cybersecurity-access-control.md": {
	id: "csv-cybersecurity-access-control.md";
  slug: "csv-cybersecurity-access-control";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"csv-risk-assessment-methodology.md": {
	id: "csv-risk-assessment-methodology.md";
  slug: "csv-risk-assessment-methodology";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-criticality-and-data-risk.md": {
	id: "data-criticality-and-data-risk.md";
  slug: "data-criticality-and-data-risk";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-governance-framework.md": {
	id: "data-governance-framework.md";
  slug: "data-governance-framework";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-governance-roles-and-careers.md": {
	id: "data-governance-roles-and-careers.md";
  slug: "data-governance-roles-and-careers";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-integrity-breach-investigation.md": {
	id: "data-integrity-breach-investigation.md";
  slug: "data-integrity-breach-investigation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-integrity-foundations.md": {
	id: "data-integrity-foundations.md";
  slug: "data-integrity-foundations";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-integrity-in-gene-therapy.md": {
	id: "data-integrity-in-gene-therapy.md";
  slug: "data-integrity-in-gene-therapy";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-lifecycle-and-metadata.md": {
	id: "data-lifecycle-and-metadata.md";
  slug: "data-lifecycle-and-metadata";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-migration-validation.md": {
	id: "data-migration-validation.md";
  slug: "data-migration-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-readiness-for-ai.md": {
	id: "data-readiness-for-ai.md";
  slug: "data-readiness-for-ai";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"database-integrity-and-dba-governance.md": {
	id: "database-integrity-and-dba-governance.md";
  slug: "database-integrity-and-dba-governance";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"depyrogenation-dry-heat-sterilization.md": {
	id: "depyrogenation-dry-heat-sterilization.md";
  slug: "depyrogenation-dry-heat-sterilization";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"deviation-management.md": {
	id: "deviation-management.md";
  slug: "deviation-management";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"device-software-cybersecurity-samd.md": {
	id: "device-software-cybersecurity-samd.md";
  slug: "device-software-cybersecurity-samd";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"di-gap-assessment-methodology.md": {
	id: "di-gap-assessment-methodology.md";
  slug: "di-gap-assessment-methodology";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"di-program-architecture.md": {
	id: "di-program-architecture.md";
  slug: "di-program-architecture";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"di-remediation-program.md": {
	id: "di-remediation-program.md";
  slug: "di-remediation-program";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"di-self-audit-checklist.md": {
	id: "di-self-audit-checklist.md";
  slug: "di-self-audit-checklist";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"digital-twins-process-lifecycle.md": {
	id: "digital-twins-process-lifecycle.md";
  slug: "digital-twins-process-lifecycle";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"disinfectant-and-sporicidal-qualification.md": {
	id: "disinfectant-and-sporicidal-qualification.md";
  slug: "disinfectant-and-sporicidal-qualification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"document-control-fundamentals.md": {
	id: "document-control-fundamentals.md";
  slug: "document-control-fundamentals";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"dscsa-serialization-track-and-trace.md": {
	id: "dscsa-serialization-track-and-trace.md";
  slug: "dscsa-serialization-track-and-trace";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"econsent-and-decentralized-trials.md": {
	id: "econsent-and-decentralized-trials.md";
  slug: "econsent-and-decentralized-trials";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ectd-submission-architecture.md": {
	id: "ectd-submission-architecture.md";
  slug: "ectd-submission-architecture";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"electronic-signatures-implementation.md": {
	id: "electronic-signatures-implementation.md";
  slug: "electronic-signatures-implementation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"environmental-monitoring-program.md": {
	id: "environmental-monitoring-program.md";
  slug: "environmental-monitoring-program";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"equipment-qualification-audit-checklist.md": {
	id: "equipment-qualification-audit-checklist.md";
  slug: "equipment-qualification-audit-checklist";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"equipment-qualification-lifecycle.md": {
	id: "equipment-qualification-lifecycle.md";
  slug: "equipment-qualification-lifecycle";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"etmf-trial-master-file.md": {
	id: "etmf-trial-master-file.md";
  slug: "etmf-trial-master-file";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"eu-ai-act-life-sciences.md": {
	id: "eu-ai-act-life-sciences.md";
  slug: "eu-ai-act-life-sciences";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"extractables-and-leachables.md": {
	id: "extractables-and-leachables.md";
  slug: "extractables-and-leachables";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"factory-site-acceptance-testing.md": {
	id: "factory-site-acceptance-testing.md";
  slug: "factory-site-acceptance-testing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fda-483-response-strategy.md": {
	id: "fda-483-response-strategy.md";
  slug: "fda-483-response-strategy";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fda-inspection-readiness.md": {
	id: "fda-inspection-readiness.md";
  slug: "fda-inspection-readiness";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fda-vs-ema-inspection-dynamics.md": {
	id: "fda-vs-ema-inspection-dynamics.md";
  slug: "fda-vs-ema-inspection-dynamics";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fda-warning-letters-patterns.md": {
	id: "fda-warning-letters-patterns.md";
  slug: "fda-warning-letters-patterns";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gamp5-csv-framework.md": {
	id: "gamp5-csv-framework.md";
  slug: "gamp5-csv-framework";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gcp-audits-and-inspections.md": {
	id: "gcp-audits-and-inspections.md";
  slug: "gcp-audits-and-inspections";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"genai-quality-operations.md": {
	id: "genai-quality-operations.md";
  slug: "genai-quality-operations";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"glp-21-cfr-58-nonclinical.md": {
	id: "glp-21-cfr-58-nonclinical.md";
  slug: "glp-21-cfr-58-nonclinical";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gmp-for-investigational-products-annex-13.md": {
	id: "gmp-for-investigational-products-annex-13.md";
  slug: "gmp-for-investigational-products-annex-13";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"good-distribution-practice-cold-chain.md": {
	id: "good-distribution-practice-cold-chain.md";
  slug: "good-distribution-practice-cold-chain";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"good-documentation-practices.md": {
	id: "good-documentation-practices.md";
  slug: "good-documentation-practices";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gxp-computerized-systems-operations.md": {
	id: "gxp-computerized-systems-operations.md";
  slug: "gxp-computerized-systems-operations";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gxp-csv-data-integrity-glossary.md": {
	id: "gxp-csv-data-integrity-glossary.md";
  slug: "gxp-csv-data-integrity-glossary";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gxp-manufacturing-systems.md": {
	id: "gxp-manufacturing-systems.md";
  slug: "gxp-manufacturing-systems";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gxp-ml-model-lifecycle.md": {
	id: "gxp-ml-model-lifecycle.md";
  slug: "gxp-ml-model-lifecycle";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gxp-quality-interview-preparation.md": {
	id: "gxp-quality-interview-preparation.md";
  slug: "gxp-quality-interview-preparation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gxp-roles-responsibilities.md": {
	id: "gxp-roles-responsibilities.md";
  slug: "gxp-roles-responsibilities";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gxp-system-inventory-classification.md": {
	id: "gxp-system-inventory-classification.md";
  slug: "gxp-system-inventory-classification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"gxp-systems-overview.md": {
	id: "gxp-systems-overview.md";
  slug: "gxp-systems-overview";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"health-authority-meetings.md": {
	id: "health-authority-meetings.md";
  slug: "health-authority-meetings";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-to-write-an-sop.md": {
	id: "how-to-write-an-sop.md";
  slug: "how-to-write-an-sop";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"human-error-in-deviations.md": {
	id: "human-error-in-deviations.md";
  slug: "human-error-in-deviations";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hybrid-paper-electronic-records.md": {
	id: "hybrid-paper-electronic-records.md";
  slug: "hybrid-paper-electronic-records";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ich-e6-good-clinical-practice.md": {
	id: "ich-e6-good-clinical-practice.md";
  slug: "ich-e6-good-clinical-practice";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ich-e8-e9-trial-design-statistics.md": {
	id: "ich-e8-e9-trial-design-statistics.md";
  slug: "ich-e8-e9-trial-design-statistics";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ich-q12-lifecycle-management.md": {
	id: "ich-q12-lifecycle-management.md";
  slug: "ich-q12-lifecycle-management";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ich-q14-q2r2-analytical-lifecycle.md": {
	id: "ich-q14-q2r2-analytical-lifecycle.md";
  slug: "ich-q14-q2r2-analytical-lifecycle";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ich-q7-api-gmp.md": {
	id: "ich-q7-api-gmp.md";
  slug: "ich-q7-api-gmp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"iec-62304-samd-software-lifecycle.md": {
	id: "iec-62304-samd-software-lifecycle.md";
  slug: "iec-62304-samd-software-lifecycle";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ind-nda-bla-pathways.md": {
	id: "ind-nda-bla-pathways.md";
  slug: "ind-nda-bla-pathways";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"infrastructure-qualification-and-spreadsheet-validation.md": {
	id: "infrastructure-qualification-and-spreadsheet-validation.md";
  slug: "infrastructure-qualification-and-spreadsheet-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"inspection-readiness.md": {
	id: "inspection-readiness.md";
  slug: "inspection-readiness";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"internal-audit-program.md": {
	id: "internal-audit-program.md";
  slug: "internal-audit-program";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"isa-88-batch-control-recipes.md": {
	id: "isa-88-batch-control-recipes.md";
  slug: "isa-88-batch-control-recipes";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"it-change-and-configuration-management-gxp.md": {
	id: "it-change-and-configuration-management-gxp.md";
  slug: "it-change-and-configuration-management-gxp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"lims-implementation-and-validation.md": {
	id: "lims-implementation-and-validation.md";
  slug: "lims-implementation-and-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"management-review-q10.md": {
	id: "management-review-q10.md";
  slug: "management-review-q10";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"managing-a-live-inspection.md": {
	id: "managing-a-live-inspection.md";
  slug: "managing-a-live-inspection";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"mes-ebr-scada-data-integrity.md": {
	id: "mes-ebr-scada-data-integrity.md";
  slug: "mes-ebr-scada-data-integrity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"method-validation-essentials.md": {
	id: "method-validation-essentials.md";
  slug: "method-validation-essentials";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"method-validation-execution.md": {
	id: "method-validation-execution.md";
  slug: "method-validation-execution";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"microbial-id-and-em-excursions.md": {
	id: "microbial-id-and-em-excursions.md";
  slug: "microbial-id-and-em-excursions";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"microbiology-qc-data-integrity.md": {
	id: "microbiology-qc-data-integrity.md";
  slug: "microbiology-qc-data-integrity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"mock-inspection-program.md": {
	id: "mock-inspection-program.md";
  slug: "mock-inspection-program";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"nitrosamines-impurities-q3-m7.md": {
	id: "nitrosamines-impurities-q3-m7.md";
  slug: "nitrosamines-impurities-q3-m7";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"oos-investigation-process.md": {
	id: "oos-investigation-process.md";
  slug: "oos-investigation-process";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"operationalizing-audit-trail-review.md": {
	id: "operationalizing-audit-trail-review.md";
  slug: "operationalizing-audit-trail-review";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"out-of-trend-investigations.md": {
	id: "out-of-trend-investigations.md";
  slug: "out-of-trend-investigations";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"part-11-annex-11-practical-guide.md": {
	id: "part-11-annex-11-practical-guide.md";
  slug: "part-11-annex-11-practical-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"pharmaceutical-quality-system.md": {
	id: "pharmaceutical-quality-system.md";
  slug: "pharmaceutical-quality-system";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"pharmacovigilance-safety-data-integrity.md": {
	id: "pharmacovigilance-safety-data-integrity.md";
  slug: "pharmacovigilance-safety-data-integrity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"plc-dcs-hmi-fundamentals.md": {
	id: "plc-dcs-hmi-fundamentals.md";
  slug: "plc-dcs-hmi-fundamentals";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"process-historian-data-integrity.md": {
	id: "process-historian-data-integrity.md";
  slug: "process-historian-data-integrity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"process-performance-qualification-ppq.md": {
	id: "process-performance-qualification-ppq.md";
  slug: "process-performance-qualification-ppq";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"process-validation-for-biologics.md": {
	id: "process-validation-for-biologics.md";
  slug: "process-validation-for-biologics";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"process-validation-lifecycle.md": {
	id: "process-validation-lifecycle.md";
  slug: "process-validation-lifecycle";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"product-complaint-handling.md": {
	id: "product-complaint-handling.md";
  slug: "product-complaint-handling";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"project-managing-validation.md": {
	id: "project-managing-validation.md";
  slug: "project-managing-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"protocol-deviation-management.md": {
	id: "protocol-deviation-management.md";
  slug: "protocol-deviation-management";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"qms-self-audit-checklist.md": {
	id: "qms-self-audit-checklist.md";
  slug: "qms-self-audit-checklist";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"qualified-person-batch-release-annex-16.md": {
	id: "qualified-person-batch-release-annex-16.md";
  slug: "qualified-person-batch-release-annex-16";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"qualifying-llms-genai-gxp.md": {
	id: "qualifying-llms-genai-gxp.md";
  slug: "qualifying-llms-genai-gxp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quality-by-design-and-doe.md": {
	id: "quality-by-design-and-doe.md";
  slug: "quality-by-design-and-doe";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quality-culture-di-failures.md": {
	id: "quality-culture-di-failures.md";
  slug: "quality-culture-di-failures";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quality-event-classification-triage.md": {
	id: "quality-event-classification-triage.md";
  slug: "quality-event-classification-triage";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quality-in-technology-transfer.md": {
	id: "quality-in-technology-transfer.md";
  slug: "quality-in-technology-transfer";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quality-manual-document-hierarchy.md": {
	id: "quality-manual-document-hierarchy.md";
  slug: "quality-manual-document-hierarchy";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quality-metrics-and-kpis.md": {
	id: "quality-metrics-and-kpis.md";
  slug: "quality-metrics-and-kpis";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"quality-risk-management.md": {
	id: "quality-risk-management.md";
  slug: "quality-risk-management";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"recall-management-field-actions.md": {
	id: "recall-management-field-actions.md";
  slug: "recall-management-field-actions";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"regulatory-intelligence-483-trends.md": {
	id: "regulatory-intelligence-483-trends.md";
  slug: "regulatory-intelligence-483-trends";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"regulatory-reporting-obligations-and-clocks.md": {
	id: "regulatory-reporting-obligations-and-clocks.md";
  slug: "regulatory-reporting-obligations-and-clocks";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"requalification-and-periodic-review-equipment.md": {
	id: "requalification-and-periodic-review-equipment.md";
  slug: "requalification-and-periodic-review-equipment";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"retroactive-validation-legacy-systems.md": {
	id: "retroactive-validation-legacy-systems.md";
  slug: "retroactive-validation-legacy-systems";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"risk-based-monitoring-clinical.md": {
	id: "risk-based-monitoring-clinical.md";
  slug: "risk-based-monitoring-clinical";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"root-cause-analysis-techniques.md": {
	id: "root-cause-analysis-techniques.md";
  slug: "root-cause-analysis-techniques";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"scaling-ai-pilot-to-production.md": {
	id: "scaling-ai-pilot-to-production.md";
  slug: "scaling-ai-pilot-to-production";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"second-person-review-of-lab-data.md": {
	id: "second-person-review-of-lab-data.md";
  slug: "second-person-review-of-lab-data";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"security-event-logging-and-monitoring.md": {
	id: "security-event-logging-and-monitoring.md";
  slug: "security-event-logging-and-monitoring";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"software-supplier-assessment-csa.md": {
	id: "software-supplier-assessment-csa.md";
  slug: "software-supplier-assessment-csa";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"source-data-and-sdv-clinical.md": {
	id: "source-data-and-sdv-clinical.md";
  slug: "source-data-and-sdv-clinical";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sponsor-oversight-of-cros.md": {
	id: "sponsor-oversight-of-cros.md";
  slug: "sponsor-oversight-of-cros";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"stability-programs-ich.md": {
	id: "stability-programs-ich.md";
  slug: "stability-programs-ich";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"static-dynamic-records-true-copies.md": {
	id: "static-dynamic-records-true-copies.md";
  slug: "static-dynamic-records-true-copies";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"statistics-in-quality-cpk-control-charts.md": {
	id: "statistics-in-quality-cpk-control-charts.md";
  slug: "statistics-in-quality-cpk-control-charts";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sterility-testing-usp-71.md": {
	id: "sterility-testing-usp-71.md";
  slug: "sterility-testing-usp-71";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sterilization-validation-moist-heat.md": {
	id: "sterilization-validation-moist-heat.md";
  slug: "sterilization-validation-moist-heat";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sterilizing-grade-filtration-validation.md": {
	id: "sterilizing-grade-filtration-validation.md";
  slug: "sterilizing-grade-filtration-validation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"supplier-vendor-qualification.md": {
	id: "supplier-vendor-qualification.md";
  slug: "supplier-vendor-qualification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"supply-chain-data-integrity.md": {
	id: "supply-chain-data-integrity.md";
  slug: "supply-chain-data-integrity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"system-decommissioning-archival-retention.md": {
	id: "system-decommissioning-archival-retention.md";
  slug: "system-decommissioning-archival-retention";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"technical-writing-for-gxp.md": {
	id: "technical-writing-for-gxp.md";
  slug: "technical-writing-for-gxp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"temperature-mapping-qualification.md": {
	id: "temperature-mapping-qualification.md";
  slug: "temperature-mapping-qualification";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"time-stamps-and-system-clock-control.md": {
	id: "time-stamps-and-system-clock-control.md";
  slug: "time-stamps-and-system-clock-control";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"training-program-gxp.md": {
	id: "training-program-gxp.md";
  slug: "training-program-gxp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"user-requirements-and-traceability.md": {
	id: "user-requirements-and-traceability.md";
  slug: "user-requirements-and-traceability";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"validating-ai-gxp-systems.md": {
	id: "validating-ai-gxp-systems.md";
  slug: "validating-ai-gxp-systems";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"validating-rpa-automation.md": {
	id: "validating-rpa-automation.md";
  slug: "validating-rpa-automation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"validating-scripts-low-code-analytics.md": {
	id: "validating-scripts-low-code-analytics.md";
  slug: "validating-scripts-low-code-analytics";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"validation-deliverables-guide.md": {
	id: "validation-deliverables-guide.md";
  slug: "validation-deliverables-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"validation-master-plan-and-periodic-review.md": {
	id: "validation-master-plan-and-periodic-review.md";
  slug: "validation-master-plan-and-periodic-review";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"validation-summary-report-and-release.md": {
	id: "validation-summary-report-and-release.md";
  slug: "validation-summary-report-and-release";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"validation-test-failure-management.md": {
	id: "validation-test-failure-management.md";
  slug: "validation-test-failure-management";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"visual-inspection-injectables-usp-790.md": {
	id: "visual-inspection-injectables-usp-790.md";
  slug: "visual-inspection-injectables-usp-790";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"water-system-validation-usp-1231.md": {
	id: "water-system-validation-usp-1231.md";
  slug: "water-system-validation-usp-1231";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-a-capa.md": {
	id: "what-is-a-capa.md";
  slug: "what-is-a-capa";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-gmp.md": {
	id: "what-is-gmp.md";
  slug: "what-is-gmp";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"why-validation-matters.md": {
	id: "why-validation-matters.md";
  slug: "why-validation-matters";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"writing-validation-protocols-and-reports.md": {
	id: "writing-validation-protocols-and-reports.md";
  slug: "writing-validation-protocols-and-reports";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};
"templates": {
"assessment-ai-supplier.md": {
	id: "assessment-ai-supplier.md";
  slug: "assessment-ai-supplier";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"assessment-compendial-verification-characteristic-selection.md": {
	id: "assessment-compendial-verification-characteristic-selection.md";
  slug: "assessment-compendial-verification-characteristic-selection";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"assessment-component-criticality.md": {
	id: "assessment-component-criticality.md";
  slug: "assessment-component-criticality";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"assessment-di-risk-gap-per-system.md": {
	id: "assessment-di-risk-gap-per-system.md";
  slug: "assessment-di-risk-gap-per-system";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"assessment-eu-ai-act-classification.md": {
	id: "assessment-eu-ai-act-classification.md";
  slug: "assessment-eu-ai-act-classification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"assessment-extractables-leachables-risk.md": {
	id: "assessment-extractables-leachables-risk.md";
  slug: "assessment-extractables-leachables-risk";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"assessment-system-impact.md": {
	id: "assessment-system-impact.md";
  slug: "assessment-system-impact";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"assessment-validation-risk-fmea.md": {
	id: "assessment-validation-risk-fmea.md";
  slug: "assessment-validation-risk-fmea";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"checklist-ai-inspection-readiness.md": {
	id: "checklist-ai-inspection-readiness.md";
  slug: "checklist-ai-inspection-readiness";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"checklist-alcoa-plus-self-assessment.md": {
	id: "checklist-alcoa-plus-self-assessment.md";
  slug: "checklist-alcoa-plus-self-assessment";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"checklist-deviation-classification-decision-tree.md": {
	id: "checklist-deviation-classification-decision-tree.md";
  slug: "checklist-deviation-classification-decision-tree";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"checklist-master-recipe-build-review.md": {
	id: "checklist-master-recipe-build-review.md";
  slug: "checklist-master-recipe-build-review";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"checklist-sop-drafting.md": {
	id: "checklist-sop-drafting.md";
  slug: "checklist-sop-drafting";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"checklist-tmf-periodic-review.md": {
	id: "checklist-tmf-periodic-review.md";
  slug: "checklist-tmf-periodic-review";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-audit-trail-review-scope-determination.md": {
	id: "form-audit-trail-review-scope-determination.md";
  slug: "form-audit-trail-review-scope-determination";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-capa-record.md": {
	id: "form-capa-record.md";
  slug: "form-capa-record";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-change-request-record.md": {
	id: "form-change-request-record.md";
  slug: "form-change-request-record";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-coi-coc-verification-log.md": {
	id: "form-coi-coc-verification-log.md";
  slug: "form-coi-coc-verification-log";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-data-criticality-classification-assessment.md": {
	id: "form-data-criticality-classification-assessment.md";
  slug: "form-data-criticality-classification-assessment";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-deviation-record.md": {
	id: "form-deviation-record.md";
  slug: "form-deviation-record";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-em-excursion-investigation.md": {
	id: "form-em-excursion-investigation.md";
  slug: "form-em-excursion-investigation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-product-complaint-intake.md": {
	id: "form-product-complaint-intake.md";
  slug: "form-product-complaint-intake";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-quality-event-triage-classification.md": {
	id: "form-quality-event-triage-classification.md";
  slug: "form-quality-event-triage-classification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-recipe-change-record.md": {
	id: "form-recipe-change-record.md";
  slug: "form-recipe-change-record";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-serial-number-reconciliation.md": {
	id: "form-serial-number-reconciliation.md";
  slug: "form-serial-number-reconciliation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-sop-review-and-approval.md": {
	id: "form-sop-review-and-approval.md";
  slug: "form-sop-review-and-approval";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"form-supplier-quality-questionnaire.md": {
	id: "form-supplier-quality-questionnaire.md";
  slug: "form-supplier-quality-questionnaire";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"guide-infrastructure-qualification.md": {
	id: "guide-infrastructure-qualification.md";
  slug: "guide-infrastructure-qualification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"log-back-room-document-request.md": {
	id: "log-back-room-document-request.md";
  slug: "log-back-room-document-request";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"log-data-stream-inventory.md": {
	id: "log-data-stream-inventory.md";
  slug: "log-data-stream-inventory";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"matrix-ai-act-mdr-ivdr-crosswalk.md": {
	id: "matrix-ai-act-mdr-ivdr-crosswalk.md";
  slug: "matrix-ai-act-mdr-ivdr-crosswalk";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"matrix-combination-product-part4-provisions.md": {
	id: "matrix-combination-product-part4-provisions.md";
  slug: "matrix-combination-product-part4-provisions";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"matrix-data-governance-raci.md": {
	id: "matrix-data-governance-raci.md";
  slug: "matrix-data-governance-raci";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"matrix-quality-event-escalation-notification.md": {
	id: "matrix-quality-event-escalation-notification.md";
  slug: "matrix-quality-event-escalation-notification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"matrix-requirements-test-traceability.md": {
	id: "matrix-requirements-test-traceability.md";
  slug: "matrix-requirements-test-traceability";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"matrix-training-curriculum.md": {
	id: "matrix-training-curriculum.md";
  slug: "matrix-training-curriculum";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"matrix-validation-traceability.md": {
	id: "matrix-validation-traceability.md";
  slug: "matrix-validation-traceability";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"pack-clinical-operational-records.md": {
	id: "pack-clinical-operational-records.md";
  slug: "pack-clinical-operational-records";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"pack-internal-audit-program.md": {
	id: "pack-internal-audit-program.md";
  slug: "pack-internal-audit-program";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"pack-recall-field-action.md": {
	id: "pack-recall-field-action.md";
  slug: "pack-recall-field-action";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-business-continuity.md": {
	id: "plan-business-continuity.md";
  slug: "plan-business-continuity";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-combination-product-quality.md": {
	id: "plan-combination-product-quality.md";
  slug: "plan-combination-product-quality";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-csv-validation.md": {
	id: "plan-csv-validation.md";
  slug: "plan-csv-validation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-disaster-recovery.md": {
	id: "plan-disaster-recovery.md";
  slug: "plan-disaster-recovery";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-dr-test-strategy.md": {
	id: "plan-dr-test-strategy.md";
  slug: "plan-dr-test-strategy";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-equipment-qualification-cq.md": {
	id: "plan-equipment-qualification-cq.md";
  slug: "plan-equipment-qualification-cq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-instrument-qualification.md": {
	id: "plan-instrument-qualification.md";
  slug: "plan-instrument-qualification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-llm-evaluation.md": {
	id: "plan-llm-evaluation.md";
  slug: "plan-llm-evaluation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-mock-inspection.md": {
	id: "plan-mock-inspection.md";
  slug: "plan-mock-inspection";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-software-supplier-audit.md": {
	id: "plan-software-supplier-audit.md";
  slug: "plan-software-supplier-audit";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-swab-rinse-sampling.md": {
	id: "plan-swab-rinse-sampling.md";
  slug: "plan-swab-rinse-sampling";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-system-decommissioning-retirement.md": {
	id: "plan-system-decommissioning-retirement.md";
  slug: "plan-system-decommissioning-retirement";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-tmf-management.md": {
	id: "plan-tmf-management.md";
  slug: "plan-tmf-management";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-validation-master-plan.md": {
	id: "plan-validation-master-plan.md";
  slug: "plan-validation-master-plan";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-validation-project.md": {
	id: "plan-validation-project.md";
  slug: "plan-validation-project";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"plan-validation-test.md": {
	id: "plan-validation-test.md";
  slug: "plan-validation-test";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"policy-ai-governance.md": {
	id: "policy-ai-governance.md";
  slug: "policy-ai-governance";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"policy-backup-and-restore.md": {
	id: "policy-backup-and-restore.md";
  slug: "policy-backup-and-restore";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"policy-data-integrity.md": {
	id: "policy-data-integrity.md";
  slug: "policy-data-integrity";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"policy-disaster-recovery.md": {
	id: "policy-disaster-recovery.md";
  slug: "policy-disaster-recovery";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"policy-infrastructure-qualification.md": {
	id: "policy-infrastructure-qualification.md";
  slug: "policy-infrastructure-qualification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-ai-ml-validation.md": {
	id: "protocol-ai-ml-validation.md";
  slug: "protocol-ai-ml-validation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-backup-restoration-test.md": {
	id: "protocol-backup-restoration-test.md";
  slug: "protocol-backup-restoration-test";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-ccit-method-validation.md": {
	id: "protocol-ccit-method-validation.md";
  slug: "protocol-ccit-method-validation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-cleaning-validation.md": {
	id: "protocol-cleaning-validation.md";
  slug: "protocol-cleaning-validation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-compendial-method-verification.md": {
	id: "protocol-compendial-method-verification.md";
  slug: "protocol-compendial-method-verification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-csv-iq.md": {
	id: "protocol-csv-iq.md";
  slug: "protocol-csv-iq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-csv-oq.md": {
	id: "protocol-csv-oq.md";
  slug: "protocol-csv-oq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-csv-pq-uat.md": {
	id: "protocol-csv-pq-uat.md";
  slug: "protocol-csv-pq-uat";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-data-migration-validation.md": {
	id: "protocol-data-migration-validation.md";
  slug: "protocol-data-migration-validation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-equipment-dq.md": {
	id: "protocol-equipment-dq.md";
  slug: "protocol-equipment-dq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-equipment-iq.md": {
	id: "protocol-equipment-iq.md";
  slug: "protocol-equipment-iq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-equipment-oq.md": {
	id: "protocol-equipment-oq.md";
  slug: "protocol-equipment-oq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-equipment-pq.md": {
	id: "protocol-equipment-pq.md";
  slug: "protocol-equipment-pq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-extractables-controlled-extraction.md": {
	id: "protocol-extractables-controlled-extraction.md";
  slug: "protocol-extractables-controlled-extraction";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-fat-sat.md": {
	id: "protocol-fat-sat.md";
  slug: "protocol-fat-sat";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-infrastructure-iq-oq.md": {
	id: "protocol-infrastructure-iq-oq.md";
  slug: "protocol-infrastructure-iq-oq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-instrument-dq.md": {
	id: "protocol-instrument-dq.md";
  slug: "protocol-instrument-dq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-instrument-iq.md": {
	id: "protocol-instrument-iq.md";
  slug: "protocol-instrument-iq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-instrument-oq.md": {
	id: "protocol-instrument-oq.md";
  slug: "protocol-instrument-oq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-instrument-pq.md": {
	id: "protocol-instrument-pq.md";
  slug: "protocol-instrument-pq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-leachables-study.md": {
	id: "protocol-leachables-study.md";
  slug: "protocol-leachables-study";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"protocol-media-fill-aps.md": {
	id: "protocol-media-fill-aps.md";
  slug: "protocol-media-fill-aps";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"record-access-recertification.md": {
	id: "record-access-recertification.md";
  slug: "record-access-recertification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"record-ai-model-card.md": {
	id: "record-ai-model-card.md";
  slug: "record-ai-model-card";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"record-atmp-conditional-oos-release.md": {
	id: "record-atmp-conditional-oos-release.md";
  slug: "record-atmp-conditional-oos-release";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"record-management-review.md": {
	id: "record-management-review.md";
  slug: "record-management-review";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"record-oos-investigation-phase1-phase2.md": {
	id: "record-oos-investigation-phase1-phase2.md";
  slug: "record-oos-investigation-phase1-phase2";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"record-pmoa-determination.md": {
	id: "record-pmoa-determination.md";
  slug: "record-pmoa-determination";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"record-validation-deviation.md": {
	id: "record-validation-deviation.md";
  slug: "record-validation-deviation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"register-ai-system-inventory-eu-ai-act.md": {
	id: "register-ai-system-inventory-eu-ai-act.md";
  slug: "register-ai-system-inventory-eu-ai-act";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"register-gxp-system-inventory.md": {
	id: "register-gxp-system-inventory.md";
  slug: "register-gxp-system-inventory";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"register-quality-risk.md": {
	id: "register-quality-risk.md";
  slug: "register-quality-risk";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-compendial-method-verification.md": {
	id: "report-compendial-method-verification.md";
  slug: "report-compendial-method-verification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-csv-validation-summary.md": {
	id: "report-csv-validation-summary.md";
  slug: "report-csv-validation-summary";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-dr-test.md": {
	id: "report-dr-test.md";
  slug: "report-dr-test";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-em-data-trending.md": {
	id: "report-em-data-trending.md";
  slug: "report-em-data-trending";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-equipment-qualification-summary.md": {
	id: "report-equipment-qualification-summary.md";
  slug: "report-equipment-qualification-summary";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-infrastructure-qualification-summary.md": {
	id: "report-infrastructure-qualification-summary.md";
  slug: "report-infrastructure-qualification-summary";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-instrument-qualification-summary.md": {
	id: "report-instrument-qualification-summary.md";
  slug: "report-instrument-qualification-summary";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-mock-inspection.md": {
	id: "report-mock-inspection.md";
  slug: "report-mock-inspection";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-periodic-review-infrastructure.md": {
	id: "report-periodic-review-infrastructure.md";
  slug: "report-periodic-review-infrastructure";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-periodic-review-system.md": {
	id: "report-periodic-review-system.md";
  slug: "report-periodic-review-system";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-software-supplier-assessment.md": {
	id: "report-software-supplier-assessment.md";
  slug: "report-software-supplier-assessment";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"report-validation-summary-vsr.md": {
	id: "report-validation-summary-vsr.md";
  slug: "report-validation-summary-vsr";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"risk-assessment-ai-ml.md": {
	id: "risk-assessment-ai-ml.md";
  slug: "risk-assessment-ai-ml";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"risk-assessment-csa-software.md": {
	id: "risk-assessment-csa-software.md";
  slug: "risk-assessment-csa-software";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-audit-trail-data-integrity.md": {
	id: "script-audit-trail-data-integrity.md";
  slug: "script-audit-trail-data-integrity";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-boundary-negative.md": {
	id: "script-boundary-negative.md";
  slug: "script-boundary-negative";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-disaster-recovery-failover.md": {
	id: "script-disaster-recovery-failover.md";
  slug: "script-disaster-recovery-failover";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-functional-oq.md": {
	id: "script-functional-oq.md";
  slug: "script-functional-oq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-installation-verification-iq.md": {
	id: "script-installation-verification-iq.md";
  slug: "script-installation-verification-iq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-interface-integration.md": {
	id: "script-interface-integration.md";
  slug: "script-interface-integration";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-performance-load.md": {
	id: "script-performance-load.md";
  slug: "script-performance-load";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-report-calculation-verification.md": {
	id: "script-report-calculation-verification.md";
  slug: "script-report-calculation-verification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-requirements-uat-pq.md": {
	id: "script-requirements-uat-pq.md";
  slug: "script-requirements-uat-pq";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"script-security-access-control.md": {
	id: "script-security-access-control.md";
  slug: "script-security-access-control";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-audit-trail-review.md": {
	id: "sop-audit-trail-review.md";
  slug: "sop-audit-trail-review";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-backup-and-restore.md": {
	id: "sop-backup-and-restore.md";
  slug: "sop-backup-and-restore";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-capa-management.md": {
	id: "sop-capa-management.md";
  slug: "sop-capa-management";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-chain-of-identity-custody.md": {
	id: "sop-chain-of-identity-custody.md";
  slug: "sop-chain-of-identity-custody";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-change-control-validated-systems.md": {
	id: "sop-change-control-validated-systems.md";
  slug: "sop-change-control-validated-systems";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-data-criticality-classification.md": {
	id: "sop-data-criticality-classification.md";
  slug: "sop-data-criticality-classification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-deviation-management.md": {
	id: "sop-deviation-management.md";
  slug: "sop-deviation-management";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-environmental-monitoring-program.md": {
	id: "sop-environmental-monitoring-program.md";
  slug: "sop-environmental-monitoring-program";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-gxp-data-flow-mapping.md": {
	id: "sop-gxp-data-flow-mapping.md";
  slug: "sop-gxp-data-flow-mapping";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-oos-investigation.md": {
	id: "sop-oos-investigation.md";
  slug: "sop-oos-investigation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-patch-management-gxp.md": {
	id: "sop-patch-management-gxp.md";
  slug: "sop-patch-management-gxp";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-quality-event-classification-triage.md": {
	id: "sop-quality-event-classification-triage.md";
  slug: "sop-quality-event-classification-triage";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-recipe-management-change-control.md": {
	id: "sop-recipe-management-change-control.md";
  slug: "sop-recipe-management-change-control";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-routine-container-closure-integrity-testing.md": {
	id: "sop-routine-container-closure-integrity-testing.md";
  slug: "sop-routine-container-closure-integrity-testing";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-software-supplier-assessment.md": {
	id: "sop-software-supplier-assessment.md";
  slug: "sop-software-supplier-assessment";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-supplier-qualification.md": {
	id: "sop-supplier-qualification.md";
  slug: "sop-supplier-qualification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-suspect-illegitimate-product-dscsa.md": {
	id: "sop-suspect-illegitimate-product-dscsa.md";
  slug: "sop-suspect-illegitimate-product-dscsa";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-template-generic.md": {
	id: "sop-template-generic.md";
  slug: "sop-template-generic";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"sop-tmf-filing-indexing-qc.md": {
	id: "sop-tmf-filing-indexing-qc.md";
  slug: "sop-tmf-filing-indexing-qc";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"spec-design-configuration-ds.md": {
	id: "spec-design-configuration-ds.md";
  slug: "spec-design-configuration-ds";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"spec-functional-fs.md": {
	id: "spec-functional-fs.md";
  slug: "spec-functional-fs";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"spec-user-requirements-urs.md": {
	id: "spec-user-requirements-urs.md";
  slug: "spec-user-requirements-urs";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"standard-configuration-management-baseline.md": {
	id: "standard-configuration-management-baseline.md";
  slug: "standard-configuration-management-baseline";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"template-capa-effectiveness-check.md": {
	id: "template-capa-effectiveness-check.md";
  slug: "template-capa-effectiveness-check";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"template-change-impact-risk-assessment.md": {
	id: "template-change-impact-risk-assessment.md";
  slug: "template-change-impact-risk-assessment";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"template-cloud-saas-qualification.md": {
	id: "template-cloud-saas-qualification.md";
  slug: "template-cloud-saas-qualification";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"template-quality-agreement.md": {
	id: "template-quality-agreement.md";
  slug: "template-quality-agreement";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"template-quality-metrics-trend.md": {
	id: "template-quality-metrics-trend.md";
  slug: "template-quality-metrics-trend";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"template-test-script-generic.md": {
	id: "template-test-script-generic.md";
  slug: "template-test-script-generic";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"test-plan-csa.md": {
	id: "test-plan-csa.md";
  slug: "test-plan-csa";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"toolkit-root-cause-analysis.md": {
	id: "toolkit-root-cause-analysis.md";
  slug: "toolkit-root-cause-analysis";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"wi-emergency-change-gxp.md": {
	id: "wi-emergency-change-gxp.md";
  slug: "wi-emergency-change-gxp";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"wi-saleable-returns-verification-vrs.md": {
	id: "wi-saleable-returns-verification-vrs.md";
  slug: "wi-saleable-returns-verification-vrs";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"worksheet-aet-calculation.md": {
	id: "worksheet-aet-calculation.md";
  slug: "worksheet-aet-calculation";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"worksheet-data-flow-map.md": {
	id: "worksheet-data-flow-map.md";
  slug: "worksheet-data-flow-map";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"worksheet-em-sampling-plan.md": {
	id: "worksheet-em-sampling-plan.md";
  slug: "worksheet-em-sampling-plan";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
"worksheet-maco-acceptance-limit.md": {
	id: "worksheet-maco-acceptance-limit.md";
  slug: "worksheet-maco-acceptance-limit";
  body: string;
  collection: "templates";
  data: InferEntrySchema<"templates">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
