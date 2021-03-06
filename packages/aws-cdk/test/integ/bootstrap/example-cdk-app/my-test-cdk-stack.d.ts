import { Construct, Stack, StackProps } from '@aws-cdk/core';

export declare enum ExampleAsset {
    ASSET_1 = "asset1.txt",
    ASSET_2 = "asset2.txt",
}

export interface MyTestCdkStackProps extends StackProps {
    readonly assetType: ExampleAsset;
}

export declare class MyTestCdkStack extends Stack {
    constructor(scope: Construct, id: string, props: MyTestCdkStackProps);
}
