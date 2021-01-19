require('dotenv').config();
const mongooose = require('mongoose'); 

mongooose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const projectSchema = {
    title: String,
    description: String
}

const Project = mongooose.model('project', projectSchema);

let controller = {
    root: (req, res) => {
        return res.status(200).send({
            "status code": "200"
        });
    },

    getProjects: (req, res) => {
        Project.find({}, (err, succ) => {
            if (err) return console.log(err);
            return res.status(200).send(succ); 
        });
    },

    getOneProject(req, res) {
        Project.findById(req.params.id, (err, succ) => {
            if (err) return console.log(err);
            res.status(200).send(succ)
        });
    },

    saveProject(req, res) {
        const project = new Project({
            title: req.body.title,
            description: req.body.description
        });
        project.save()
            .then(() => {
                res.status(200).send(project);
            })
            .catch(() => {
                res.status(500).send({
                    message: "Error creating document"
                })
            })
        
    },

    editProject(req, res) {

    },

    deleteProject(req, res) {

    },
}

module.exports = controller;