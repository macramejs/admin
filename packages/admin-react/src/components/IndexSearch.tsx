import Input from './Input';
import { Index } from '@macramejs/macrame-react'

type IndexSearchProps = {
    table: Index
}

function IndexSearch(props: IndexSearchProps) {
    let table = props.table;

	return <Input value={table.search} onChange={table.updateSearch} />;
}

export default IndexSearch;
