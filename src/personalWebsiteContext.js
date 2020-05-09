import React from 'react'

const PersonalWebsiteContext = React.createContext({
  journals: [],
  projects: [],
  dataFetch: () => {}
})

export default PersonalWebsiteContext;