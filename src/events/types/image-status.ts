export enum ImageStatus {
    /**
     * Image is created but not published
     */
    Created = 'created',
  
    /**
     * Image is being published to Storage server
     */
    Publishing = 'publishing',
  
    /**
     * Image has been publihed to Storage server
     */
    Published ='published',
  
    /**
     * Image has been updated
     */
    Updated = 'updated',

    /**
     * Image has been deleted
     */
    Deleted = 'deleted'
  }
  