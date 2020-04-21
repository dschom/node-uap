var fs = require('fs'),
    yaml = require('yamlparser'),
    refImpl = require('uap-ref-impl')(readYAML(require.resolve('uap-core/regexes.yaml')));

function readYAML(fileName) {
    var data = fs.readFileSync(fileName, 'utf8');
    return yaml.eval(data);
}

module.exports = refImpl;
