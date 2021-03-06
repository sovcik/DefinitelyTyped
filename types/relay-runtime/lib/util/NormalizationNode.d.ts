export type NormalizationArgument = NormalizationLiteral | NormalizationVariable;

export interface NormalizationDefer {
    readonly if: string | null;
    readonly kind: 'Defer';
    readonly label: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationClientExtension {
    readonly kind: string; // 'ClientExtension';
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export type NormalizationField = NormalizationFlightField | NormalizationScalarField | NormalizationLinkedField;

export interface NormalizationLinkedField {
    readonly kind: string; // 'LinkedField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly storageKey?: string | null;
    readonly args: ReadonlyArray<NormalizationArgument>;
    readonly concreteType: string | null | undefined;
    readonly plural: boolean;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationOperation {
    readonly kind: string; // 'Operation';
    readonly name: string;
    readonly argumentDefinitions: ReadonlyArray<NormalizationLocalArgumentDefinition>;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationScalarField {
    readonly kind: string; // 'ScalarField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly storageKey: string | null | undefined;
}

export interface NormalizationFlightField {
    readonly kind: string; // 'FlightField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly storageKey: string | null | undefined;
}

export interface NormalizationTypeDiscriminator {
    readonly kind: string; // 'TypeDiscriminator';
    readonly abstractKey: string;
}

export type NormalizationSelection =
    | NormalizationCondition
    | NormalizationClientExtension
    | NormalizationDefer
    | NormalizationField
    | NormalizationFlightField
    | NormalizationHandle
    | NormalizationInlineFragment
    | NormalizationModuleImport
    | NormalizationStream
    | NormalizationTypeDiscriminator;

export interface NormalizationSplitOperation {
    readonly kind: string; // 'SplitOperation';
    readonly name: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationStream {
    readonly if: string | null;
    readonly kind: string; // 'Stream';
    readonly label: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationLiteral {
    readonly kind: string; // 'Literal';
    readonly name: string;
    readonly type?: string | null;
    readonly value?: unknown;
}

export interface NormalizationVariable {
    readonly kind: string; // 'Variable';
    readonly name: string;
    readonly type?: string | null;
    readonly variableName: string;
}

export interface NormalizationConnection {
    readonly kind: string;
    readonly label: string;
    readonly name: string;
    readonly args: ReadonlyArray<NormalizationArgument>;
    readonly edges: NormalizationLinkedField;
    readonly pageInfo: NormalizationLinkedField;
}

export interface NormalizationLocalArgumentDefinition {
    readonly kind: string;
    readonly name: string;
    readonly defaultValue: any;
}

export interface NormalizationModuleImport {
    readonly kind: string;
    readonly documentName: string;
    readonly fragmentPropName: string;
    readonly fragmentName: string;
}

export interface NormalizationCondition {
    readonly kind: string; // 'Condition';
    readonly passingValue: boolean;
    readonly condition: string;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export type NormalizationHandle = NormalizationScalarHandle | NormalizationLinkedHandle;

export interface NormalizationLinkedHandle {
    readonly kind: string; // 'LinkedHandle';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly handle: string;
    readonly key: string;
    readonly filters: ReadonlyArray<string> | null | undefined;
}

export interface NormalizationScalarHandle {
    readonly kind: string; // 'ScalarHandle';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly handle: string;
    readonly key: string;
    readonly filters: ReadonlyArray<string> | null | undefined;
}

export interface NormalizationInlineFragment {
    readonly kind: string; // 'InlineFragment';
    readonly selections: ReadonlyArray<NormalizationSelection>;
    readonly type: string;
}

export type NormalizationSelectableNode =
    | NormalizationDefer
    | NormalizationLinkedField
    | NormalizationOperation
    | NormalizationSplitOperation
    | NormalizationStream;
