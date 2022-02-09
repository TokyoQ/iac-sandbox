# Create a test stack with CloudFormation

From this folder, run this command. 

`aws cloudformation create-stack --stack-name <stackname> --template-body file://./ec2.cfn.yaml --region ap-southeast-2`

Go to CloudFormation in the console to check your results.

You can edit the template and update the stack again.

`aws cloudformation update-stack --stack-name <stackname> --template-body file://./ec2.cfn.yaml --region ap-southeast-2`

Delete the stack with this command once you're done.

`aws cloudformation delete-stack --stack-name <stackname> --region ap-southeast-2`
