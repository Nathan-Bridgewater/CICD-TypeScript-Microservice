import * as cdk from 'aws-cdk-lib'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as ecs from 'aws-cdk-lib/aws-ecs'
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns'
import { type Construct } from 'constructs'

export class CdkStack extends cdk.Stack {
  constructor (scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 3
    })

    const cluster = new ecs.Cluster(this, 'MyCluster', {
      vpc:vpc
    })

    const fargateService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyFargateServce', {
      cluster: cluster,
      cpu: 512,
      desiredCount: 6,
      taskImageOptions: { image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample') },
      memoryLimitMiB: 2048,
      publicLoadBalancer: true
    })

  }
}
