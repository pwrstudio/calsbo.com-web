type Span = {
    text: string;
    _key: string;
    _type: 'span';
    marks: string[];
};

type Block = {
    markDefs: any[]; // Replace 'any' with a more specific type if available
    children: Span[];
    _type: 'block';
    style: string;
    _key: string;
};

type ContentEditor = {
    _type: 'contentEditor';
    content: Block[];
};

type Slug = {
    current: string;
    _type: 'slug';
};

export interface ItemType {
    _type: 'item';
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    type: 'article' | 'link' | 'file';
    title: string;
    what: string[];
    with: string[];
    where: string;
    when: string;
    date: string;
    content: ContentEditor;
    link: string;
    fileUrl: string;
    slug: Slug;
}