export const getLocale = (userConfig, knownLocales) => {

  let result = userConfig.locale === knownLocales[1];

  console.log(result)

  if (result = "true") {
    return 1
  } else {
    return 2
  }

}

// userConfig.locale === knownLocales[i]
