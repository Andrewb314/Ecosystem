
<READ THIS: everything inside angle brackets in this document should be read, replaced and removed, including this comment><They should be no angle brackets When done!>



{{{
  "title": "<Title of your article, typicaly something like 'Installing Foo on Linux x64'>",
  "date": "<Date the article is created>",
  "author": "<Author of the article>",
  "attachments": [],
  "contentIsHTML": false
}}}

![<alternate access text that describes the logo>](<URL of the logo>)

### Technology Profile

<text that describes the capability that this blueprint adds. Generally, this should be at a summary level>

### Description

<More detail on the features if required. This should be differentiating features, versioning, dependencies> 

For more information, please visit <URL of partner>

### Audience
CenturyLink Cloud Users

### Impact
After reading this article, the user should <describe what is different as a result of reading this article>

### Prerequisite
- < Probably, at a minimum 'Access to the CenturyLink Cloud platform as an authorized user.'>
- <More bullets as required.  Note that these are bullets>

### Postrequisite
< This may be none, but typically the following is required if the user is building a server that requires web login.  Is SSH is required, change ports below>
To access your application from a computer outside the CenturyLink Cloud network, perform the following tasks after you receive the email notifying you that the Blueprint completed successfully:
  1. [Add a Public IP](../Network/how-to-add-public-ip-to-virtual-machine.md) to your server through Control Portal
  2. [Allow incoming traffic](../Network/how-to-add-public-ip-to-virtual-machine.md) for desired ports by clicking on the Servers Public IP through Control Portal and configuring appropriately.
    * The default ports to access the application are: 80, 443

### Deploying the <name of the blueprint> Blueprint

#### Steps to Deploy Blueprint
1. **Locate the <Name of the Blueprint> Blueprint**
<Note the indentation, two spaces, and numbers for steps to be executed. >
  1. Starting from the CenturyLink Control Panel, navigate to the Blueprints Library.
  2. Search for “<a keyword that will work>” in the keyword search on the right side of the page.
  3. Locate the '<Full Name of the blueprint> Blueprint

2. **Choose and Deploy the Blueprint.**
   Click the ""<Full Name of the blueprint>" Blueprint.

3. **Customize the Blueprint**
  1. **<Summary task description for area of the blueprint page, eg., setting up the server.  Note indentation, numbering, asterisks to bold the title>**
    1. <task element one>
    2. <task element two>

  2. **<Second summary task, eg, customize server name>**
    1. <Task element one>
	2. <Task Element two>

  3.** < Third summary task>
    1. <Task element one>
	2. <Task Element two>

4. **Review and Confirm the Blueprint**
  1. Click “next: step 2”
  2. Verify your configuration details.

5. **Deploy the Blueprint**
  1. Once verified, click on the ‘deploy blueprint’ button. You will see the deployment details along with an email stating the Blueprint is queued for execution.
  2. This will kick off the blueprint deploy process and load a page to allow you to track the progress of the deployment.

6. **Monitor the Activity Queue**
  1. Monitor the Deployment Queue to view the progress of the blueprint.
  2. You can access the queue at any time by clicking the Queue link under the Blueprints menu on the main navigation drop-down.
  3. Once the blueprint completes successfully, you will receive an email stating that the blueprint build is complete. Please do not use the application until you have received this email notification.

### Deploy <This Product Name> to an existing server (alternate option)  <These are the instructions to be executed for existing server installation.  This may be deleted if not applicable>

<Product Name> is available as a Script Package for deployment on an existing server based on your own sizing requirements or to support more advanced configurations such as customized Blueprint Workflows to repeatably deploy multiple stacks on servers.

#### Steps
1. **Deploy or Identify an Existing Server**
Identify the server targeted for <application Name> installation.  The Operating system must be supported by the Script Package.  The server must be a server within your CenturyLink Cloud account.
2. **Select 'Execute the Package on a Server Group'**
  1. Packages can be executed on one more more servers in a Group.  Search for the public script package named **<Your script name>**.
  2. See the [using group tasks to install scripts on groups](../Servers/using-group-tasks-to-install-software-and-run-scripts-on-groups.md) KB for more information on how to complete the next few steps.

3. **Configure the Parameters**
Set the following application parameters:
  1. <task element one>
  2. <task element two>

4. **Deploy the Script Package**
Once verified, click on the `execute package` button. This will kick off the deployment process and load a page where you can track the progress. Deployment will typically complete within a few minutes.

5. **Monitor the Activity Queue**
  * Monitor the Deployment Queue to view the progress of the blueprint.
  * You can access the queue at any time by clicking the Queue link under the Blueprints menu on the main navigation drop-down.
  * Once the blueprint completes successfully, you will receive an email stating that the blueprint build is complete. Please do not use the application until you have received this email notification.

### Access your <application name> server
After your Blueprint deploys successfully, please follow these instructions to access your server:
  1. <task element one>
  2. <task element two>

### Pricing
The costs associated with this Blueprint deployment are for the CenturyLink Cloud infrastructure only.  There are no <Application Vendor Name><Modify this section as needed to address pricing> license costs or additional fees bundled in.

### About <Partner Name>
CenturyLink Cloud works with [<Partner name>](<partner URL>) to provide <description of partners offerings>

### Frequently Asked Questions

#### Who should I contact for support?
* For issues related to deploying the <Partner Name> Blueprint on CenturyLink Cloud, Licensing or Accessing the deployed software, please visit the [<Partner Name> Support website](<partner support site URL>)
* For issues related to cloud infrastructure (VM's, network, etc), or is you experience a problem deploying the Blueprint or Script Package, please open a CenturyLink Cloud Support ticket by emailing [noc@ctl.io](mailto:noc@ctl.io) or [through the CenturyLink Cloud Support website](https://t3n.zendesk.com/tickets/new).
