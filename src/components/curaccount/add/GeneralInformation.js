import React, { useEffect, useState } from 'react';
import FormGroup from '../../common/FormGroup';
import ExpandableBox from '../../common/ExpandableBox';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import { getCompanyTypeLists, getDirectionLists } from '../../../store/companySlice';
import { listBranches } from '../../../store/firmSlice';
import { getEinvoiceLists } from '../../../store/mutualSlice';

import GeneralBusinessCodeModal from '../../mutual/modal/GeneralBusinessCodeModal';

export default function GeneralInformation(props) {
    const dispatch = useDispatch();

    let usrData = useSelector((state) => state.aut.userData);

    useEffect(() => {
        dispatch(getDirectionLists());
        dispatch(getCompanyTypeLists());
        dispatch(getEinvoiceLists());
        dispatch(listBranches({ firmaId: usrData.firmaId }));
    }, []);

    const directionList = useSelector((state) => state.company.directionList);
    const einvoiceList = useSelector((state) => state.mutual.einvoiceList);
    const branchList = useSelector((state) => state.firm.branchList);

    const [isBusinessCodeModalOpen, setBusinessCodeModalOpen] = useState(false);
    const [businessCodeForLeaving, setBusinessCodeForLeaving] = useState({ id: '', ad: '' });
    const setBusinessCodeForLeavingValues = row => {
        props.formProps.setFieldValue('vergiDaireid', row.id);
        setBusinessCodeForLeaving(row);
    }

    return (
        <ExpandableBox headerText="Cari Kart Ekle">
            <div className="p-2 font-semibold text-base text-gray-dark">Genel Bilgiler</div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Türü" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="firmaKurulus" as="select" className="cs-input appearance-none">
                            <option value="0">Şahıs</option>
                            <option value="1">Kuruluş</option>
                        </Field>
                    </FormGroup>


                    <FormGroup label="Ünvan">
                        <Field name="unvan" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Cari Kart Tipi" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="firmaYonid" as="select" className="cs-input appearance-none">
                            {directionList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>


                </div>

                <div>
                    <FormGroup label="Şube" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="subeid" as="select" className="cs-input appearance-none">
                            {branchList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>


                    <div className="grid grid-cols-3 gap-x-3 mt-4 px-2">
                        <div className="flex items-center">
                            <Field id="tedarikci" name="firmaTurid" type="radio" value="1"
                                className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                            <label htmlFor="tedarikci" className="text-sm">Tedarikçi</label>
                        </div>

                        <div className="flex items-center">
                            <Field id="potansiyel" name="firmaTurid" type="radio" value="2"
                                className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                            <label htmlFor="potansiyel" className="text-sm">Potansiyel</label>
                        </div>
                        <div className="flex items-center">
                            <Field id="bayi" name="firmaTurid" type="radio" value="4"
                                className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                            <label htmlFor="bayi" className="text-sm">Bayi</label>
                        </div>
                        <div className="flex items-center">
                            <Field id="distributor" name="firmaTurid" type="radio" value="5"
                                className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                            <label htmlFor="distributor" className="text-sm">Distribütör</label>
                        </div>
                        <div className="flex items-center">
                            <Field id="diger" name="firmaTurid" type="radio" value="6"
                                className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                            <label htmlFor="diger" className="text-sm">Diğer</label>
                        </div>
                    </div>
                </div>

                <div>
                    <FormGroup
                        label="Vergi Dairesi"
                        icon={require('../../../images/icons/search.png')}
                        iconclick={() => setBusinessCodeModalOpen(true)}
                        iconClassName="cursor-pointer">
                        <input className="cs-input pr-8" value={businessCodeForLeaving.ad} disabled={true} />
                        <input name="vergiDaireid" value={businessCodeForLeaving.id} disabled={true} type="hidden" />
                    </FormGroup>

                    <FormGroup label="Vergi Numarası">
                        <Field name="vergiNo" className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="E Fatura" icon={require('../../../images/icons/angle-down.png')}>
                        <Field name="eFaturaTurid" as="select" className="cs-input appearance-none">
                            {einvoiceList.map(item =>
                                <option key={item.id} value={item.id}>{item.adi}</option>
                            )}
                        </Field>
                    </FormGroup>
                </div>
                {isBusinessCodeModalOpen &&
                    <GeneralBusinessCodeModal
                        onSelect={setBusinessCodeForLeavingValues}
                        onClose={() => setBusinessCodeModalOpen(false)} />
                }
            </div>
        </ExpandableBox>
    );
}

GeneralInformation.defaultProps = {
    className: ''
}

GeneralInformation.propTypes = {
    className: PropTypes.string,
    formProps: PropTypes.object
}