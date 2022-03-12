let { people } = require('../data')

const getPeople =  (req, res) => {
    res.status(200).json({success:true, data:people})
}

const createPerson =  (req, res) => { 
    const {name} = req.body
    !name ? res.status(400).json({success: false,msg:'please provide correct name value'}) : res.status(201).send({success:true,person:name})
    res.status(201).send('sucess')
 }

const createPersonPostman = (req,res) => {
    const {name} = req.body
    !name ? res.status(400).json({success:false, msg:'please provide a name value'}) : res.status(201).send({success:true, data:[...people, name] })
}

const updatePerson = (req, res) => { 
    const {id} = req.params;
    const {name} = req.body;
    console.log(id, name);
    const person = people.find((person) =>  person.id === Number(id))
    if( !person) {
        return res.status(404)
                   .json({success:false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person) => { 
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
     })
     res.status(200).json({success:true, data:newPeople})
 }

 const deletePerson = (req,res) => { 
    const person = people.find((person) =>  person.id === Number(req.params.id))

     if  (!person ) {
         res.status(404)
      .json({success:false, msg: `no person with id ${req.params.id}`})
      } 
      const newPeople = people.filter((person) => {(person.id !== Number(req.params.id))})
        res.status(200).json({sucess:true, data:newPeople })
  }

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson}