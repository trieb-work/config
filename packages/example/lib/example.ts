
// The default @trieb.work/tsconfig-base would not allow unused parameters
// but we have overwritten that in the local tsconfig.json and typechecking passes.
function HelloWorld(greeting: string): string {
    return "hello World";
}
