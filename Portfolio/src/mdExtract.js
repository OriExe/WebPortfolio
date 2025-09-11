//https://dev.to/codingnninja/how-to-extract-title-description-or-metadata-from-markdown-3nn8
export const extractProjectData= markdown => { 
    const charactersBetweenGroupedHyphens = /^{([\s\S]*?)}/; // Regex to get all data in the MD 
    const metadataMatched = markdown.match(charactersBetweenGroupedHyphens);
    const metadata = metadataMatched[1]; //Split up the metadata

    if (!metadata) 
    {
        return {};
    }
     const SplitUpProject = metadata.split("\n"); //Splits each line and puts it in an array 

  // Use reduce to accumulate the metadata into an object
     const ProjectDictonary = SplitUpProject.reduce((accumulator, line) =>
     {
        // Split the line into key-value pairs
            const[key, ...value] = line.split(":").map(part => part.trim());

        if(key) 
        {
            accumulator[key] = value[1] ? value.join(":") : value.join("");
        }    
   return accumulator;
    }, {});

    return ProjectDictonary;
};




