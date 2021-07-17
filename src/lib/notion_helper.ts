import {
    FilesPropertyValue,
    MultiSelectPropertyValue,
    PropertyValue,
    RichTextPropertyValue,
    SelectPropertyValue,
    TitlePropertyValue,
    URLPropertyValue,
    DatePropertyValue,
    CheckboxPropertyValue,
} from '@notionhq/client/build/src/api-types';

export const asTitle = (propertyValue: PropertyValue) =>
    (propertyValue as TitlePropertyValue)?.title || '';

export const asRichText = (propertyValue: PropertyValue) =>
    (propertyValue as RichTextPropertyValue)?.rich_text[0]?.plain_text || '';

export const asUrl = (propertyValue: PropertyValue) =>
    (propertyValue as URLPropertyValue)?.url || '';

export const asSelect = (propertyValue: PropertyValue) => propertyValue as SelectPropertyValue;

export const asMultiSelect = (propertyValue: PropertyValue) =>
    propertyValue as MultiSelectPropertyValue;

export const asFiles = (propertyValue: PropertyValue) => propertyValue as FilesPropertyValue;

export const asDate = (propertyValue: PropertyValue) =>
    (propertyValue as DatePropertyValue)?.date.start || '';

export const asCheckbox = (propertyValue: PropertyValue) =>
    (propertyValue as CheckboxPropertyValue)?.checkbox;
