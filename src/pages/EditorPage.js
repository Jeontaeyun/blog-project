import React from 'react';
import EditorTemplate from '../compoenets/editor/EditorTemplate';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';
import PreviewPaneContainer from '../containers/editor/PreviewPaneContainer';
import EditorHeaderContainer from '../containers/editor/EditorHeaderContainer';

// match는 React-Router-Dom에서 주는 props이다.
const EditorPage = ({match}) => {

    return(
        <div>
            <EditorTemplate
                header = {<EditorHeaderContainer/>}
                editor = {<EditorPaneContainer/>}
                preview = {<PreviewPaneContainer/>}
            />
        </div>
    );
};

export default EditorPage;