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
"batch-record-review-gmp.md": {
	id: "batch-record-review-gmp.md";
  slug: "batch-record-review-gmp";
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
"breaking-into-gxp-quality.md": {
	id: "breaking-into-gxp-quality.md";
  slug: "breaking-into-gxp-quality";
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
"change-control-validated-systems.md": {
	id: "change-control-validated-systems.md";
  slug: "change-control-validated-systems";
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
"clinical-qa-gcp-data-integrity.md": {
	id: "clinical-qa-gcp-data-integrity.md";
  slug: "clinical-qa-gcp-data-integrity";
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
"computer-software-assurance-fda.md": {
	id: "computer-software-assurance-fda.md";
  slug: "computer-software-assurance-fda";
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
"data-governance-framework.md": {
	id: "data-governance-framework.md";
  slug: "data-governance-framework";
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
"deviation-management.md": {
	id: "deviation-management.md";
  slug: "deviation-management";
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
"document-control-fundamentals.md": {
	id: "document-control-fundamentals.md";
  slug: "document-control-fundamentals";
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
"glp-21-cfr-58-nonclinical.md": {
	id: "glp-21-cfr-58-nonclinical.md";
  slug: "glp-21-cfr-58-nonclinical";
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
"gxp-manufacturing-systems.md": {
	id: "gxp-manufacturing-systems.md";
  slug: "gxp-manufacturing-systems";
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
"gxp-systems-overview.md": {
	id: "gxp-systems-overview.md";
  slug: "gxp-systems-overview";
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
"iso-14971-risk-management-devices.md": {
	id: "iso-14971-risk-management-devices.md";
  slug: "iso-14971-risk-management-devices";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"medical-device-quality-system-qmsr.md": {
	id: "medical-device-quality-system-qmsr.md";
  slug: "medical-device-quality-system-qmsr";
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
"process-validation-lifecycle.md": {
	id: "process-validation-lifecycle.md";
  slug: "process-validation-lifecycle";
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
"quality-culture-di-failures.md": {
	id: "quality-culture-di-failures.md";
  slug: "quality-culture-di-failures";
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
"retroactive-validation-legacy-systems.md": {
	id: "retroactive-validation-legacy-systems.md";
  slug: "retroactive-validation-legacy-systems";
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
"statistics-in-quality-cpk-control-charts.md": {
	id: "statistics-in-quality-cpk-control-charts.md";
  slug: "statistics-in-quality-cpk-control-charts";
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
"training-program-gxp.md": {
	id: "training-program-gxp.md";
  slug: "training-program-gxp";
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
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
