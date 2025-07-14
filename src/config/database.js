const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite',
  define:{
    timestamp:true,
    underscore:true,
    underscoredAll:true
  }
});
/*
module.exports={
    dialect: 'sqlite',
  storage: 'path/to/database.sqlite',
  define:{
    timestamp:true,
    underscore:true,
    underscoredAll:true
}
}*/