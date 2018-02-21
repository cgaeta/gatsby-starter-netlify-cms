import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import HexPreview from './preview-templates/HexPreview';
import HexGridPreview from './preview-templates/HexGridPreview';
import NavbarPreview from './preview-templates/NavBarPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('hex', HexPreview);
CMS.registerPreviewTemplate('hexGrid', HexGridPreview);
CMS.registerPreviewTemplate('navbar', NavbarPreview);
