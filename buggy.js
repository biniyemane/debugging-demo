const storeOwners = [
    {
      name: 'Charles',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'Sally',
      stores: 1,
      location: "CA",
    },
    {
      name: 'Cassandra',
      stores: 1,
      location: "TX",
    },
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "NM",
    },
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0; // Initialize totalLocations
    for (let i = 0; i < storeOwners.length; i++) {
      totalLocations += storeOwners[i].stores;
    }
    return totalLocations;
  };
  
  let locations = listNumberOfStores();
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me who owns stores?');
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      if (person === 'Danny Shavez' && location === 'NM') {
        console.log(`Yes, ${person} that lives in NM owns one too`);
      } else {
        console.log(`Yes, ${person} has one`);
      }
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      if (person === 'Danny Shavez' && location === 'NM') {
        console.log(`Yes, ${person} that lives in NM owns one too`);
      } else {
        console.log(`Yes, ${person} has one`);
      }
    }
  }
  
  tellMeMyStores();
  hasStore();
  