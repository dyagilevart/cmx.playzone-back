import path from "path";

class PicturesController {

    public async get(req, res) {
        try {
            res.sendFile(path.join(__dirname, '../../') + '/pictures/' + req.params.filename);
        } catch (error) {
            res.status(400).send(error);
        }
    }

}

export default PicturesController;