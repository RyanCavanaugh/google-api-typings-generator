# Typescript typings for Google Cloud Resource Manager API
The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.
For detailed description please check [documentation](https://cloud.google.com/resource-manager).

## Installing

Install typings for Google Cloud Resource Manager API:
```
npm install @types/gapi.client.cloudresourcemanager-v1beta1 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('cloudresourcemanager', 'v1beta1', () => {
    // now we can use gapi.client.cloudresourcemanager
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
    
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Google Cloud Resource Manager API resources:

```typescript 
    
/* 
Lists Projects that are visible to the user and satisfy the
specified filter. This method returns Projects in an unspecified order.
New Projects do not necessarily appear at the end of the list.  
*/
await gapi.client.projects.list({  }); 
    
/* 
Sets the IAM access control policy for the specified Project. Replaces
any existing policy.

The following constraints apply when using `setIamPolicy()`:

+ Project does not support `allUsers` and `allAuthenticatedUsers` as
`members` in a `Binding` of a `Policy`.

+ The owner role can be granted only to `user` and `serviceAccount`.

+ Service accounts can be made owners of a project directly
without any restrictions. However, to be added as an owner, a user must be
invited via Cloud Platform console and must accept the invitation.

+ A user cannot be granted the owner role using `setIamPolicy()`. The user
must be granted the owner role using the Cloud Platform Console and must
explicitly accept the invitation.

+ Invitations to grant the owner role cannot be sent using
`setIamPolicy()`; they must be sent only using the Cloud Platform Console.

+ Membership changes that leave the project without any owners that have
accepted the Terms of Service (ToS) will be rejected.

+ If the project is not part of an organization, there must be at least
one owner who has accepted the Terms of Service (ToS) agreement in the
policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner
from the policy will fail. This restriction also applies to legacy
projects that no longer have owners who have accepted the ToS. Edits to
IAM policies will be rejected until the lack of a ToS-accepting owner is
rectified.

+ Calling this method requires enabling the App Engine Admin API.

Note: Removing service accounts from policies or changing their roles
can render services completely inoperable. It is important to understand
how the service account is being used before removing or updating its
roles.  
*/
await gapi.client.projects.setIamPolicy({ resource: "resource",  }); 
    
/* 
Creates a Project resource.

Initially, the Project resource is owned by its creator exclusively.
The creator can later grant permission to others to read or update the
Project.

Several APIs are activated automatically for the Project, including
Google Cloud Storage.  
*/
await gapi.client.projects.create({  }); 
    
/* 
Returns the IAM access control policy for the specified Project.
Permission is denied if the policy or the resource does not exist.  
*/
await gapi.client.projects.getIamPolicy({ resource: "resource",  }); 
    
/* 
Restores the Project identified by the specified
`project_id` (for example, `my-project-123`).
You can only use this method for a Project that has a lifecycle state of
DELETE_REQUESTED.
After deletion starts, the Project cannot be restored.

The caller must have modify permissions for this Project.  
*/
await gapi.client.projects.undelete({ projectId: "projectId",  }); 
    
/* 
Retrieves the Project identified by the specified
`project_id` (for example, `my-project-123`).

The caller must have read permissions for this Project.  
*/
await gapi.client.projects.get({ projectId: "projectId",  }); 
    
/* 
Gets a list of ancestors in the resource hierarchy for the Project
identified by the specified `project_id` (for example, `my-project-123`).

The caller must have read permissions for this Project.  
*/
await gapi.client.projects.getAncestry({ projectId: "projectId",  }); 
    
/* 
Updates the attributes of the Project identified by the specified
`project_id` (for example, `my-project-123`).

The caller must have modify permissions for this Project.  
*/
await gapi.client.projects.update({ projectId: "projectId",  }); 
    
/* 
Returns permissions that a caller has on the specified Project.  
*/
await gapi.client.projects.testIamPermissions({ resource: "resource",  }); 
    
/* 
Marks the Project identified by the specified
`project_id` (for example, `my-project-123`) for deletion.
This method will only affect the Project if the following criteria are met:

+ The Project does not have a billing account associated with it.
+ The Project has a lifecycle state of
ACTIVE.

This method changes the Project's lifecycle state from
ACTIVE
to DELETE_REQUESTED.
The deletion starts at an unspecified time, at which point the project is
no longer accessible.

Until the deletion completes, you can check the lifecycle state
checked by retrieving the Project with GetProject,
and the Project remains visible to ListProjects.
However, you cannot update the project.

After the deletion completes, the Project is not retrievable by
the  GetProject and
ListProjects methods.

The caller must have modify permissions for this Project.  
*/
await gapi.client.projects.delete({ projectId: "projectId",  }); 
    
/* 
Fetches an Organization resource identified by the specified resource name.  
*/
await gapi.client.organizations.get({ name: "name",  }); 
    
/* 
Updates an Organization resource identified by the specified resource name.  
*/
await gapi.client.organizations.update({ name: "name",  }); 
    
/* 
Returns permissions that a caller has on the specified Organization.
The `resource` field should be the organization's resource name,
e.g. "organizations/123".  
*/
await gapi.client.organizations.testIamPermissions({ resource: "resource",  }); 
    
/* 
Lists Organization resources that are visible to the user and satisfy
the specified filter. This method returns Organizations in an unspecified
order. New Organizations do not necessarily appear at the end of the list.  
*/
await gapi.client.organizations.list({  }); 
    
/* 
Sets the access control policy on an Organization resource. Replaces any
existing policy. The `resource` field should be the organization's resource
name, e.g. "organizations/123".  
*/
await gapi.client.organizations.setIamPolicy({ resource: "resource",  }); 
    
/* 
Gets the access control policy for an Organization resource. May be empty
if no such policy or resource exists. The `resource` field should be the
organization's resource name, e.g. "organizations/123".  
*/
await gapi.client.organizations.getIamPolicy({ resource: "resource",  });
```