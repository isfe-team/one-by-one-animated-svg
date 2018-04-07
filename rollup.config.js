import buble from 'rollup-plugin-buble'

export default {
  input: 'src/index.js',
  plugins: [ buble() ],
  output: {
    banner: '/*!\n' +
            ' * zwwang bqliu\n' +
            ' * simple svg animation\n' +
            ' */',
    footer: '\n',
    file: 'dist/animation.umd.js',
    format: 'umd',
    name: '$$animatedSvg',
    sourcemap: true
  },
  watch: {
    include: 'src/**'
  }
}
