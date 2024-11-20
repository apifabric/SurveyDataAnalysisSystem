# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 20, 2024 04:02:46
# Database: sqlite:////tmp/tmp.IxhYHYn4Da-01JD3VR9539WFZ1RF5732T8ANX/SurveyDataAnalysisSystem/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Questiontype(SAFRSBaseX, Base):
    """
    description: Stores types of questions that can be used in surveys.
    """
    __tablename__ = 'questiontype'
    _s_collection_name = 'Questiontype'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Respondent(SAFRSBaseX, Base):
    """
    description: Stores respondent details.
    """
    __tablename__ = 'respondent'
    _s_collection_name = 'Respondent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    RespondentactivityList : Mapped[List["Respondentactivity"]] = relationship(back_populates="respondent")
    ResponseList : Mapped[List["Response"]] = relationship(back_populates="respondent")



class Survey(SAFRSBaseX, Base):
    """
    description: Stores survey details.
    """
    __tablename__ = 'survey'
    _s_collection_name = 'Survey'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    created_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    QuestionList : Mapped[List["Question"]] = relationship(back_populates="survey")
    SurveyresponsesummaryList : Mapped[List["Surveyresponsesummary"]] = relationship(back_populates="survey")
    SurveystatisticList : Mapped[List["Surveystatistic"]] = relationship(back_populates="survey")
    SurveytopicList : Mapped[List["Surveytopic"]] = relationship(back_populates="survey")



class Topic(SAFRSBaseX, Base):
    """
    description: Stores topics related to surveys.
    """
    __tablename__ = 'topic'
    _s_collection_name = 'Topic'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    SurveytopicList : Mapped[List["Surveytopic"]] = relationship(back_populates="topic")



class Question(SAFRSBaseX, Base):
    """
    description: Holds questions for surveys.
    """
    __tablename__ = 'question'
    _s_collection_name = 'Question'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    survey_id = Column(ForeignKey('survey.id'), nullable=False)
    text = Column(String, nullable=False)
    question_type = Column(String)

    # parent relationships (access parent)
    survey : Mapped["Survey"] = relationship(back_populates=("QuestionList"))

    # child relationships (access children)
    ChoiceList : Mapped[List["Choice"]] = relationship(back_populates="question")
    QuestionstatisticList : Mapped[List["Questionstatistic"]] = relationship(back_populates="question")
    ResponseList : Mapped[List["Response"]] = relationship(back_populates="question")



class Respondentactivity(SAFRSBaseX, Base):
    """
    description: Tracks activity of each respondent over surveys.
    """
    __tablename__ = 'respondentactivity'
    _s_collection_name = 'Respondentactivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    respondent_id = Column(ForeignKey('respondent.id'), nullable=False)
    last_active_date = Column(DateTime)
    surveys_completed = Column(Integer, nullable=False)

    # parent relationships (access parent)
    respondent : Mapped["Respondent"] = relationship(back_populates=("RespondentactivityList"))

    # child relationships (access children)



class Surveyresponsesummary(SAFRSBaseX, Base):
    """
    description: Summarizes responses of specific surveys.
    """
    __tablename__ = 'surveyresponsesummary'
    _s_collection_name = 'Surveyresponsesummary'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    survey_id = Column(ForeignKey('survey.id'), nullable=False)
    total_responses = Column(Integer, nullable=False)
    completion_rate = Column(Float)

    # parent relationships (access parent)
    survey : Mapped["Survey"] = relationship(back_populates=("SurveyresponsesummaryList"))

    # child relationships (access children)



class Surveystatistic(SAFRSBaseX, Base):
    """
    description: Holds aggregated statistics for surveys.
    """
    __tablename__ = 'surveystatistics'
    _s_collection_name = 'Surveystatistic'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    survey_id = Column(ForeignKey('survey.id'), nullable=False)
    total_respondents = Column(Integer, nullable=False)
    average_score = Column(Float)

    # parent relationships (access parent)
    survey : Mapped["Survey"] = relationship(back_populates=("SurveystatisticList"))

    # child relationships (access children)



class Surveytopic(SAFRSBaseX, Base):
    """
    description: Links surveys with topics.
    """
    __tablename__ = 'surveytopic'
    _s_collection_name = 'Surveytopic'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    survey_id = Column(ForeignKey('survey.id'), nullable=False)
    topic_id = Column(ForeignKey('topic.id'), nullable=False)

    # parent relationships (access parent)
    survey : Mapped["Survey"] = relationship(back_populates=("SurveytopicList"))
    topic : Mapped["Topic"] = relationship(back_populates=("SurveytopicList"))

    # child relationships (access children)



class Choice(SAFRSBaseX, Base):
    """
    description: Stores choices for multiple choice questions.
    """
    __tablename__ = 'choice'
    _s_collection_name = 'Choice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    question_id = Column(ForeignKey('question.id'), nullable=False)
    text = Column(String, nullable=False)

    # parent relationships (access parent)
    question : Mapped["Question"] = relationship(back_populates=("ChoiceList"))

    # child relationships (access children)
    QuestionstatisticList : Mapped[List["Questionstatistic"]] = relationship(back_populates="choice")
    ResponseList : Mapped[List["Response"]] = relationship(back_populates="choice")



class Questionstatistic(SAFRSBaseX, Base):
    """
    description: Holds aggregated statistics for questions.
    """
    __tablename__ = 'questionstatistics'
    _s_collection_name = 'Questionstatistic'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    question_id = Column(ForeignKey('question.id'), nullable=False)
    total_responses = Column(Integer, nullable=False)
    most_chosen_choice = Column(ForeignKey('choice.id'))

    # parent relationships (access parent)
    choice : Mapped["Choice"] = relationship(back_populates=("QuestionstatisticList"))
    question : Mapped["Question"] = relationship(back_populates=("QuestionstatisticList"))

    # child relationships (access children)



class Response(SAFRSBaseX, Base):
    """
    description: Stores responses of respondents to questions.
    """
    __tablename__ = 'response'
    _s_collection_name = 'Response'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    respondent_id = Column(ForeignKey('respondent.id'), nullable=False)
    question_id = Column(ForeignKey('question.id'), nullable=False)
    choice_id = Column(ForeignKey('choice.id'))
    response_text = Column(String)

    # parent relationships (access parent)
    choice : Mapped["Choice"] = relationship(back_populates=("ResponseList"))
    question : Mapped["Question"] = relationship(back_populates=("ResponseList"))
    respondent : Mapped["Respondent"] = relationship(back_populates=("ResponseList"))

    # child relationships (access children)
