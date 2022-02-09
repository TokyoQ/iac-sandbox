import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class AlecsCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //const vpcid = this.node.tryGetContext('vpc-067dd41ab7afe94d3');
    const vpc = ec2.Vpc.fromLookup(this, 'VPC', {
      //vpcId: vpcid,
      isDefault: true,
    });

    new ec2.Instance(this, 'instance', {
      vpc: vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux()

    })
  }
}