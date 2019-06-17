import React from "react";
import Col from "react-bootstrap/Col";

import ArchiveChildren from "../archive/archive-children";

class MainColumn extends React.Component {
    render() {
        return (
            <Col xs={true} className="col-main-content">
                <article dangerouslySetInnerHTML={{ __html: this.props.markup }} />

                {this.props.template === 'archive' &&
                    <ArchiveChildren archiveChildren={this.props.archiveChildren} />
                }
            </Col>
        );
    }
}

export default MainColumn;