const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWITRE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWITRE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWITRE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWITRE_BUCKET_ID),
}

export default conf