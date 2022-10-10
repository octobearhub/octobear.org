# A tutorial on uploading Images

## Where do you need to upload images? 
Whenever you're sharing a resource, or a community event, there is an option to share an image link in the data you're uploading, which is basically a JSON object. For example, if you're adding a new event, your content may look like: 

```
{
        "title": "Outreachy 2023",
        "image": "https://user-images.githubusercontent.com/78233115/194045366-942e7379-92ba-4625-9048-939e4bba434c.png",
        "description": "The Outreachy program is a really great program for students that aims to support diversity in open source and open science. Outreachy provides internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.",
        "url": "https://www.outreachy.org/",
        "end_date": "2023-02-25"
    }
```

Look at the second field here, which requires you to add an image. 

## How to add an image? 

In order to add images without actually storing them in the repository, one can make use of the Github's user-images domain. Here is how you do it: 
- Click new issue; this will open up the issue creator.
- Drag and drop your image in the body content. 
- Wait for upload completion and copy the URL for the image.
- Cancel the issue creation and use the URL by pasting it as a value for the image key in the JSON data above.

Happy learning! 
