declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"home": {
"about.md": {
  id: "about.md",
  slug: "about",
  body: string,
  collection: "home",
  data: any
} & { render(): Render[".md"] },
"home.md": {
  id: "home.md",
  slug: "home",
  body: string,
  collection: "home",
  data: any
} & { render(): Render[".md"] },
"testimonials.md": {
  id: "testimonials.md",
  slug: "testimonials",
  body: string,
  collection: "home",
  data: any
} & { render(): Render[".md"] },
},
"section1": {
"subsectiona/breadcrumb-page.md": {
  id: "subsectiona/breadcrumb-page.md",
  slug: "subsectiona/breadcrumb-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectiona/card-page.md": {
  id: "subsectiona/card-page.md",
  slug: "subsectiona/card-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectiona/inline-nav.md": {
  id: "subsectiona/inline-nav.md",
  slug: "subsectiona/inline-nav",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectiona/new-page.md": {
  id: "subsectiona/new-page.md",
  slug: "subsectiona/new-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectiona/page-with-code.md": {
  id: "subsectiona/page-with-code.md",
  slug: "subsectiona/page-with-code",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectiona/page-with-images.md": {
  id: "subsectiona/page-with-images.md",
  slug: "subsectiona/page-with-images",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectiona/page-with-tables.md": {
  id: "subsectiona/page-with-tables.md",
  slug: "subsectiona/page-with-tables",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectiona/sidenav-page.md": {
  id: "subsectiona/sidenav-page.md",
  slug: "subsectiona/sidenav-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectiona/wide-page.md": {
  id: "subsectiona/wide-page.md",
  slug: "subsectiona/wide-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectionb/another-new-page.md": {
  id: "subsectionb/another-new-page.md",
  slug: "subsectionb/another-new-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectionb/breadcrumb-page.md": {
  id: "subsectionb/breadcrumb-page.md",
  slug: "subsectionb/breadcrumb-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectionb/card-page.md": {
  id: "subsectionb/card-page.md",
  slug: "subsectionb/card-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectionb/sidenav-page.md": {
  id: "subsectionb/sidenav-page.md",
  slug: "subsectionb/sidenav-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
"subsectionb/wide-page.md": {
  id: "subsectionb/wide-page.md",
  slug: "subsectionb/wide-page",
  body: string,
  collection: "section1",
  data: any
} & { render(): Render[".md"] },
},
"section2": {
"another-new-page.md": {
  id: "another-new-page.md",
  slug: "another-new-page",
  body: string,
  collection: "section2",
  data: any
} & { render(): Render[".md"] },
"card-page.md": {
  id: "card-page.md",
  slug: "card-page",
  body: string,
  collection: "section2",
  data: any
} & { render(): Render[".md"] },
"page-with-code.md": {
  id: "page-with-code.md",
  slug: "page-with-code",
  body: string,
  collection: "section2",
  data: any
} & { render(): Render[".md"] },
"page-with-images.md": {
  id: "page-with-images.md",
  slug: "page-with-images",
  body: string,
  collection: "section2",
  data: any
} & { render(): Render[".md"] },
"page-with-tables.md": {
  id: "page-with-tables.md",
  slug: "page-with-tables",
  body: string,
  collection: "section2",
  data: any
} & { render(): Render[".md"] },
"sidenav-page.md": {
  id: "sidenav-page.md",
  slug: "sidenav-page",
  body: string,
  collection: "section2",
  data: any
} & { render(): Render[".md"] },
"top-nav-page.md": {
  id: "top-nav-page.md",
  slug: "top-nav-page",
  body: string,
  collection: "section2",
  data: any
} & { render(): Render[".md"] },
"wide-page.md": {
  id: "wide-page.md",
  slug: "wide-page",
  body: string,
  collection: "section2",
  data: any
} & { render(): Render[".md"] },
},
"section3": {
"subsectiona/sidenav-page-copy.md": {
  id: "subsectiona/sidenav-page-copy.md",
  slug: "subsectiona/sidenav-page-copy",
  body: string,
  collection: "section3",
  data: any
} & { render(): Render[".md"] },
"subsectiona/sidenav-page.md": {
  id: "subsectiona/sidenav-page.md",
  slug: "subsectiona/sidenav-page",
  body: string,
  collection: "section3",
  data: any
} & { render(): Render[".md"] },
"subsectionb/sidenav-page-copy.md": {
  id: "subsectionb/sidenav-page-copy.md",
  slug: "subsectionb/sidenav-page-copy",
  body: string,
  collection: "section3",
  data: any
} & { render(): Render[".md"] },
"subsectionb/sidenav-page.md": {
  id: "subsectionb/sidenav-page.md",
  slug: "subsectionb/sidenav-page",
  body: string,
  collection: "section3",
  data: any
} & { render(): Render[".md"] },
},
"section4": {
"breadcrumb-page.md": {
  id: "breadcrumb-page.md",
  slug: "breadcrumb-page",
  body: string,
  collection: "section4",
  data: any
} & { render(): Render[".md"] },
"card-page.md": {
  id: "card-page.md",
  slug: "card-page",
  body: string,
  collection: "section4",
  data: any
} & { render(): Render[".md"] },
"page-with-code.md": {
  id: "page-with-code.md",
  slug: "page-with-code",
  body: string,
  collection: "section4",
  data: any
} & { render(): Render[".md"] },
"page-with-images.md": {
  id: "page-with-images.md",
  slug: "page-with-images",
  body: string,
  collection: "section4",
  data: any
} & { render(): Render[".md"] },
"page-with-tables.md": {
  id: "page-with-tables.md",
  slug: "page-with-tables",
  body: string,
  collection: "section4",
  data: any
} & { render(): Render[".md"] },
"sidenav-page.md": {
  id: "sidenav-page.md",
  slug: "sidenav-page",
  body: string,
  collection: "section4",
  data: any
} & { render(): Render[".md"] },
"wide-page.md": {
  id: "wide-page.md",
  slug: "wide-page",
  body: string,
  collection: "section4",
  data: any
} & { render(): Render[".md"] },
},
"section5": {
"create/breadcrumb-page.md": {
  id: "create/breadcrumb-page.md",
  slug: "create/breadcrumb-page",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"create/card-page.md": {
  id: "create/card-page.md",
  slug: "create/card-page",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"create/cognitive-walkthrough.md": {
  id: "create/cognitive-walkthrough.md",
  slug: "create/cognitive-walkthrough",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"create/page-with-code.md": {
  id: "create/page-with-code.md",
  slug: "create/page-with-code",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"create/page-with-images.md": {
  id: "create/page-with-images.md",
  slug: "create/page-with-images",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"establish/page-with-lists.md": {
  id: "establish/page-with-lists.md",
  slug: "establish/page-with-lists",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"establish/page-with-prose.md": {
  id: "establish/page-with-prose.md",
  slug: "establish/page-with-prose",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"establish/page-with-tables.md": {
  id: "establish/page-with-tables.md",
  slug: "establish/page-with-tables",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"establish/wide-page.md": {
  id: "establish/wide-page.md",
  slug: "establish/wide-page",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"formulate/page-with-tables.md": {
  id: "formulate/page-with-tables.md",
  slug: "formulate/page-with-tables",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"formulate/wide-page.md": {
  id: "formulate/wide-page.md",
  slug: "formulate/wide-page",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"pioneer/card-page.md": {
  id: "pioneer/card-page.md",
  slug: "pioneer/card-page",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
"pioneer/page-with-images.md": {
  id: "pioneer/page-with-images.md",
  slug: "pioneer/page-with-images",
  body: string,
  collection: "section5",
  data: any
} & { render(): Render[".md"] },
},
"section6": {
"breadcrumb-page.md": {
  id: "breadcrumb-page.md",
  slug: "breadcrumb-page",
  body: string,
  collection: "section6",
  data: any
} & { render(): Render[".md"] },
"card-page.md": {
  id: "card-page.md",
  slug: "card-page",
  body: string,
  collection: "section6",
  data: any
} & { render(): Render[".md"] },
"page-with-code.md": {
  id: "page-with-code.md",
  slug: "page-with-code",
  body: string,
  collection: "section6",
  data: any
} & { render(): Render[".md"] },
"page-with-images.md": {
  id: "page-with-images.md",
  slug: "page-with-images",
  body: string,
  collection: "section6",
  data: any
} & { render(): Render[".md"] },
"page-with-lists.md": {
  id: "page-with-lists.md",
  slug: "page-with-lists",
  body: string,
  collection: "section6",
  data: any
} & { render(): Render[".md"] },
"page-with-prose.md": {
  id: "page-with-prose.md",
  slug: "page-with-prose",
  body: string,
  collection: "section6",
  data: any
} & { render(): Render[".md"] },
"page-with-tables.md": {
  id: "page-with-tables.md",
  slug: "page-with-tables",
  body: string,
  collection: "section6",
  data: any
} & { render(): Render[".md"] },
"wide-page.md": {
  id: "wide-page.md",
  slug: "wide-page",
  body: string,
  collection: "section6",
  data: any
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = never;
}
